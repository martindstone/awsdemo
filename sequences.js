var sequences = {
    "01 Demo (Ken)": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["01 Demo (Ken)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["01 Demo (Ken)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudTrail Unsafe logins": [
        {
            "routing_key": services["01 Demo (Ken)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["01 Demo (Ken)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["01 Demo (Ken)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["01 Demo (Ken)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        }       ],
    },
    "02 Demo (Eric)": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["02 Demo (Eric)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["02 Demo (Eric)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudTrail Unsafe logins": [
        {
            "routing_key": services["02 Demo (Eric)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["02 Demo (Eric)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["02 Demo (Eric)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["02 Demo (Eric)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        }       ],
    },
    "03 Demo (Masado)": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["03 Demo (Masado)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["03 Demo (Masado)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudTrail Unsafe logins": [
        {
            "routing_key": services["03 Demo (Masado)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["03 Demo (Masado)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["03 Demo (Masado)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["03 Demo (Masado)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        }       ],
    },
    "04 Demo (Edward)": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["04 Demo (Edward)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["04 Demo (Edward)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudTrail Unsafe logins": [
        {
            "routing_key": services["04 Demo (Edward)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["04 Demo (Edward)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["04 Demo (Edward)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["04 Demo (Edward)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        }       ],
    },
    "05 Demo (John)": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["05 Demo (John)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["05 Demo (John)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudTrail Unsafe logins": [
        {
            "routing_key": services["05 Demo (John)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["05 Demo (John)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["05 Demo (John)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["05 Demo (John)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        }       ],
    },
    "06 Demo (Cheryl)": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["06 Demo (Cheryl)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudTrail Unsafe logins": [
        {
            "routing_key": services["06 Demo (Cheryl)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["06 Demo (Cheryl)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["06 Demo (Cheryl)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        }       ],
    },
    "07 Demo (TBD)": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["07 Demo (TBD)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["07 Demo (TBD)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudTrail Unsafe logins": [
        {
            "routing_key": services["07 Demo (TBD)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["07 Demo (TBD)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["07 Demo (TBD)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        },
        {
            "routing_key": services["07 Demo (TBD)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM RestartCount"],
            "delay": 2
        }       ],
    }
};
