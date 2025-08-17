# Монетизация

## Метрики и монетизация

**Метрики для каждой модели монетизации**

Если мы говорим про то, какие метрики необходимо отслеживать в разного рода бизнесах, то определяющим фактором является модель монетизации (вне зависимости от того, над каким типом сервиса мы работаем). Существуют несколько основных моделей:

### Enterprice

An enterprise company sells services or software to other businesses on a single-license basis.

These contracts have fixed terms, designated contract values, and come up for renewal at the end of the term.

Examples: Docker, Clouderia, FireEye

Metrics:

Bookings - Sum of value of all customer contracts (note: letters of intent and verbal agreements ≠ bookings)

Total customers - Total number of unique contracted customers today

Revenue - Revenue is recognized when the service is actualy provided or ratably over the life of the agreement

## SaaS

A SaaS (software -as-a-service) company sells subscription-based licenses for a cloud-hosted software solution.

Examples: Segment, Ironclad, Sendbird

Metrics:

MRR (Monthly Recurring Revenue) - Revenue recognized for recurring services rendered in a given month (does not include one-time, or nn-recurring, revenue such as fees and professional services revenue)

ARR (Annual Recurring Revenue) - Measure of revenue components that are recurring in nature on an annual basis (ARR=MRR*12)

GROSS MRR Churn - Monthly recurring revenue lost in a given period recuring revenue at the beginning of the month

PAID CAC - Cost per customer acquired throught paid marketing channels (total sales and marketing spend in a given month/total customers acquired via paid channels, including via sales, in a given month

## Subscribtion

A subscription company sells a product or service, usually to a consumer, on a recurring basis.

Examples: The Athletic, Dollar Shave Club, Blue Apron

Metrics:

MRR (Monthly Recurring Revenue) - Revenue recognized for recurring services rendered in a given month (does not include one-time, or non-recurring, revenue such as fees and professional services revenue)

MRR CMGR (Compound Monthly Growth Rate) - Implied compounded monthly MRR growth rate between two disparete month [CMGR=(latest month MRR/first month MRR) ^ (1/#of month)-1]

GROSS USER CHURN - Total lost customers (cancelled subscriptions) in a given period / prior period total customers

PAID CAC - Cost per customer acquired through paid marketing channels (total sales and marketing spend in a given month/total customers acquired via paid channels, including via sales, in a given month)

### Transactional

A transactional company enables a financial transaction on behalf of a customer and collects a fee (usually a percent of the underlying transaction). 

Examples: Stripe, PayPal, Coinbase, Brex

Metrics:

GROSS TRANSACTION VOLUME - Total sales or payment dollar volume transacted in a given period 

NET REVENUE - The portion of GTV that the company recognizes as revenue for services rendered 

USER RETENTION - Percent of customers who go on to make at least one purchase in month 2 (note: this is a cohort metric)

PAID CAC - Cost per customer acquired through paid marketing channels (total sales and marketing spend in a given month / total customers acquired via paid channels, including via sales, in a given month)

### Marketplace

A marketplace company acts as an intermediary in the sale of a good or service between sellers and buyers, generally collecting a percent of the total transaction value.

Examples: Airbnb, eBay

Metrics:

GMV (Gross Merchandise Value) - Total sales dollar volume of merchandise transacted in a given period 

NET REVENUE - The portion of GMV that the company recognizes as revenue for services rendered 

NET REVENUE CMGR (Compound Monthly Growth Rate) - Implied compounded monthly net revenue growth rate between two disparate months [CMGR = (latest month net revenue / first month net revenue) ^ (1/ # of months) -1] 

USER RETENTION - Percent of customers who go on to make at least one purchase in month 2 (note: this is a cohort metric) 

PAID CAC - Cost per customer acquired through paid marketing channels (total sales and marketing spend in a given month / total customers acquired via paid channels, including via sales, in a given month) 

### E-commerce

An e-commerce company sells physical goods online. Generally, e-commerce companies manufacture and inventory those goods. 

Examples: Warby Parker, Bonobos, Memebox

Metrics:

MONTHLY REVENUE - Total revenue in a given month 

REVENUE CMGR (Compound Monthly Growth Rate) - Implied compounded monthly revenue growth rate between two disparate months [CMGR = (latest month revenue / first month revenue) ^ (1/ # of months) -1] 

GROSS MARGIN - Gross profit in a given month / total revenue in the same month (gross profit equals total revenue less cost of sales and goods sold) 

PAID CAC -  Cost per customer acquired through paid marketing channels (total sales and marketing spend in a given month / total customers acquired via paid channels, including via sales, in a given month)

### Advertising

An advertising company offers a free service to consumers and derives revenue entirely, or predominantly, from advertisers. Common advertising companies include social networks and content sites. 

Examples: Snapchat, Twitter, Reddit

Metrics:

DAILY ACTIVE USERS (DAU) - Total number of unique users active in a 24-hour day, averaged over a given period of time 

MONTHLY ACTIVE USERS (MAU) - Total number of unique users active at least once in last 28-days 

PERCENT LOGGED-IN - Total monthly active users with a registered account ("logged-in") divided by the total unique visitors (inclusive of both "logged-in" and "logged-out") during the same 28-day window 

### Hardware

A hardware company sells physical devices to consumers or businesses. 

Examples: Fitbit, GoPro, Xiaomi

Metrics:

MONTHLY REVENUE - Total revenue in a given month 

REVENUE CMGR (Compound Monthly Growth Rate) - Implied compounded monthly revenue growth rate between two disparate months [CMGR = (latest month revenue / first month revenue) ^ (1 /# of months) -1] 

GROSS MARGIN - Gross profit in a given month / total revenue in the same month (gross profit equals total revenue less cost of sales and goods sold) 

PAID CAC - Cost per customer acquired through paid marketing channels (total sales & marketing spend in a given month / total customers acquired via paid channels, including via sales, in a given month)