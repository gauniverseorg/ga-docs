---
sidebar_position: 31
---
# Stopwatch

This class is used for measuring elapsed time with high resolution if the underlying hardware supports it, and falls back to using DateTime and ticks as a measurement otherwise. Here's a breakdown of the code:

- The class has private fields _elapsed (stores the elapsed time in ticks),_startTimeStamp (stores the timestamp when the stopwatch started), and _isRunning (indicates whether the stopwatch is currently running)
- The Frequency field stores the frequency of the high-resolution performance counter, if available. Otherwise, it stores the value of TicksPerSecond. This frequency is used for conversion between high-frequency performance counter ticks and ticks used by DateTime
- The s_tickFrequency field stores the ratio between ticks and the high-resolution performance counter frequency. It is used to speed up the conversion from high-frequency ticks to DateTime ticks
- The constructor Stopwatch() initializes the stopwatch by calling the Reset() method
- The Start() method starts the stopwatch. If the stopwatch is already running, calling Start() has no effect
- The StartNew() method creates a new instance of Stopwatch, starts it, and returns the initialized instance
- The Stop() method stops the stopwatch and updates the elapsed time by adding the duration since the last start. If the stopwatch is already stopped, calling Stop() has no effect
- The Reset() method resets the stopwatch by setting the elapsed time to zero, clearing the start timestamp, and stopping the stopwatch if it's running
- The Restart() method restarts the stopwatch by resetting the elapsed time to zero, setting a new start timestamp, and starting the stopwatch. It is a convenient method that combines the Reset() and Start() operations
- The IsRunning property indicates whether the stopwatch is currently running
- The Elapsed property returns the elapsed time as a TimeSpan object based on the current elapsed ticks
- The ElapsedMilliseconds property returns the elapsed time in milliseconds based on the current elapsed ticks
- The ElapsedTicks property returns the current elapsed ticks
- The GetTimestamp() method returns the current timestamp of the high-resolution performance counter

This Stopwatch class provides a way to measure elapsed time with high resolution if available, allowing for more precise timing measurements. It is commonly used in performance profiling and benchmarking scenarios.
