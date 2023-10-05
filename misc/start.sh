#!/bin/bash

# Function to add a timestamp to a message
add_timestamp() {
  echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1"
}

# Initialize a variable to store the timestamped output
timestamped_output=""

# Function to capture output with timestamps
capture_output() {
  while read -r line; do
    timestamped_line="$(add_timestamp "$line")"
    timestamped_output+="\n$timestamped_line"
    echo "$timestamped_line"
  done
}

# Redirect standard output and standard error to capture_output function
exec > >(capture_output)
exec 2>&1

# Start the SSH Agent (if it's not already running)
eval $(ssh-agent -s)

# Ensure agent directory exists
if [ ! -d /home/pi/.ssh/agent ]; then
    mkdir -p /home/pi/.ssh/agent
fi

# Set the agent file path
AGENT_FILE="/home/pi/.ssh/agent/$(hostname)"
echo "Debug: AGENT_FILE is set to $AGENT_FILE"

# Store agent details to the file
$AGENT | grep -v echo > $AGENT_FILE & pid=$!
echo "Debug: Contents of AGENT_FILE:"
cat $AGENT_FILE

# Add your key to the agent
ssh-add /home/pi/.ssh/id_rsa

# Load the SSH Agent environment variables
if [ -f "$AGENT_FILE" ]; then
    . $AGENT_FILE
else
    echo "Error: SSH agent file not found."
    exit 1
fi

# Your existing operations
sudo echo "#########################################################################################################################################################" >> /home/pi/server.log
echo -e "$timestamp_output" > /home/pi/server.log
cd /home/pi/ga-docs/
#sudo kill -SIGTERM $(sudo lsof -t -i :3000)
PID=$(sudo lsof -t -i :3000)
if [ ! -z "$PID" ]; then
    sudo kill -SIGTERM $PID
fi

sudo rm -rf -v ./build/
git pull
sudo npm ci
npm run build
npx docusaurus serve --host 0.0.0.0 > /home/pi/server.log 2>&1 &
