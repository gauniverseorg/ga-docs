---
sidebar_position: 1
---

# Microsoft Azure (AKS Cluster)

Azure Kubernetes Service (AKS) offers the quickest way to start developing and deploying cloud-native apps in Azure.


## Prerequisites

Before launching an AKS service, you need to have an Azure subscription and have the Azure CLI installed on your machine:

- [Azure Subscription](https://azure.microsoft.com/en-us/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/)

## How to Create an AKS Cluster

1. Search the AKS Cluster in the Search Bar

2. Click on “Create a Kubernetes Cluster” to create the cluster

![Image1](../../../../static/img/aksCluster1.png)

3. Enter all the information in the Basics tab

![Image2](../../../../static/img/aksCluster2.png)

![Image3](../../../../static/img/aksCluster3.png)

4. Now click on Node Pools tab and then + Add node pool button. Enter all the information and then click on the Update button

![Image4](../../../../static/img/aksCluster4.png)

![Image5](../../../../static/img/aksCluster5.png)

![Image6](../../../../static/img/aksCluster6.png)

5. Now, click on Networking tab and select Azure CNI in the Network configuration

![Image7](../../../../static/img/aksCluster7.png)

6. Select Azure as Network Policy

![Image8](../../../../static/img/aksCluster8.png)

7. Now go to Monitoring tab and Select Default Configuration as the Azure Monitor. Now click on “Review + Create“ button

![Image9](../../../../static/img/aksCluster9.png)

## How to Connect with AKS Cluster

1. Search “AKS” in the search bar and then click on “Kubernetes Service” as mentioned in the image below

![Image10](../../../../static/img/aksCluster10.png)

2. Select the desired Kubernetes service and click on the “Connect” button

![Image11](../../../../static/img/aksCluster11.png)


3. Connect to the “Azure CLI” Service

![Image12](../../../../static/img/aksCluster12.png)

4. Open any of  cmd, Powershell or gitbash and  run the following commands

![Image13](../../../../static/img/aksCluster13.png)

5. Use the below command, to check whether the cluster is connected or not with local machine

    > kubectl get deployments --all-namespaces=true

## AKS Kubernetes Deployment

- [Configuring the AKS Kubernetes Deployment](./AKS-Kubernetes-Deployment)
