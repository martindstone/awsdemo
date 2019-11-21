var sequences = {
    "Product Search (pdtresponder01)": {
     "All AWS Events": [
        {
            "routing_key": services["Product Search (pdtresponder01)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Product Search (pdtresponder01)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Product Search (pdtresponder01)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Product Search (pdtresponder01)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Product Search (pdtresponder01)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    },
    "Checkout (pdtresponder03)": {
        "All AWS Events": [
        {
            "routing_key": services["Checkout (pdtresponder03)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Checkout (pdtresponder03)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Checkout (pdtresponder03)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Checkout (pdtresponder03)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Checkout (pdtresponder03)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    },
    "Shopping Cart (pdtresponder06)": {
        "All AWS Events": [
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Shopping Cart (pdtresponder06)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    },
    "Mobile Inventory (pdtresponder07)": {
        "All AWS Events": [
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Mobile Inventory (pdtresponder07)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    },
    "Payment Processor (pdtresponder05)": {
        "All AWS Events": [
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Payment Processor (pdtresponder05)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Payment Processor (pdtresponder05)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    },
    "User Profile (pdtresponder04)": {
        "All AWS Events": [
        {
            "routing_key": services["User Profile (pdtresponder04)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["User Profile (pdtresponder04)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["User Profile (pdtresponder04)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["User Profile (pdtresponder04)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["User Profile (pdtresponder04)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    },
    "Inventory (pdtresponder02)": {
        "All AWS Events": [
        {
            "routing_key": services["Inventory (pdtresponder02)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Inventory (pdtresponder02)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Inventory (pdtresponder02)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Inventory (pdtresponder02)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Inventory (pdtresponder02)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
         {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA Auth (dmendez)"],
            "delay": 1
        },      
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }, 
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },

        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Promotions (pdtresponder08)"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],

    },

};
