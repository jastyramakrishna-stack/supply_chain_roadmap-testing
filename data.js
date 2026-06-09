const roadmapData = [
  {
    title: "Supply Chain Foundations",
    badge: "Start Here",
    content: {
      overview: `## What is it?\nSupply Chain Management (SCM) coordinates all activities involved in sourcing, procurement, production, and delivery of products — from raw materials to the end customer.\n\n## Why it matters\nA well-managed supply chain reduces costs, improves service levels, and creates competitive advantage. Companies like Amazon and Walmart have built entire business models around supply chain excellence.\n\n## Key Concepts\n- Material flow: physical movement of goods from supplier to customer\n- Information flow: orders, forecasts, and tracking data\n- Financial flow: payments, credit terms, and invoices\n- Bullwhip Effect: small demand changes amplified upstream\n- OTIF: On Time In Full — the gold standard KPI\n\n## Key Metrics / KPIs\n- Perfect Order Rate\n- Cash-to-Cash Cycle Time\n- OTIF (On Time In Full)\n- Inventory Turnover`,
      topics: {
        "What is Supply Chain Management": `## What is it?\nSCM coordinates the flow of goods, information, and money from raw materials to the end customer across a network of suppliers, manufacturers, and distributors.\n\n## Why it matters\nA well-run supply chain reduces costs, improves availability, and creates competitive advantage — Amazon and Walmart have built entire business models around supply chain excellence.\n\n## Key takeaway\nA great product with a poor supply chain will always lose to a good product with a great one.`,
        "Logistics & Distribution Basics": `## What is it?\nLogistics covers the planning, movement, and storage of goods — inbound from suppliers, internally between sites, and outbound to customers — through a network of distribution centres and transport links.\n\n## Why it matters\nLogistics typically represents 5–15% of a product's total cost, making it one of the highest-leverage levers for both profitability and customer service.\n\n## Key takeaway\nWithout reliable logistics, every upstream plan — sourcing, production, forecasting — ultimately fails at the point of customer delivery.`,
        "Procurement & Sourcing Fundamentals": `## What is it?\nProcurement is the process of buying goods and services from external suppliers; sourcing is the strategic discipline of identifying, evaluating, and selecting the right suppliers for long-term value.\n\n## Why it matters\nProcurement spend typically represents 40–80% of a company's revenue, making supplier selection and negotiation one of the most impactful financial levers in any business.\n\n## Key takeaway\nThe best procurement teams don't just negotiate the lowest price — they secure the right quality, reliability, and innovation from partners who help the business win.`,
        "Inventory Management Essentials": `## What is it?\nInventory management controls what stock to hold, how much, and where — balancing the cost of holding excess stock against the risk of running out and losing sales.\n\n## Why it matters\nInventory directly ties up working capital — every unit on the shelf is cash that could be deployed elsewhere, making optimisation a direct lever on both profit and cash flow.\n\n## Key takeaway\nZara holds just 6–8 days of stock vs the industry average of 52+ days — proof that inventory management is a source of competitive advantage, not just an operational necessity.`,
        "Demand Planning Basics": `## What is it?\nDemand planning uses historical data, market intelligence, and commercial inputs to forecast future customer demand — the starting point for every supply, production, and inventory decision.\n\n## Why it matters\nA 10% improvement in forecast accuracy typically delivers 5–15% reduction in inventory and 2–3% improvement in service levels — directly impacting working capital and customer satisfaction.\n\n## Key takeaway\nEvery supply chain decision downstream — what to make, buy, stock, and ship — is only as good as the demand forecast it's built on.`,
        "Replenishment Planning Basics": `## What is it?\nReplenishment planning determines when to order more stock and how much to order — triggering purchase orders automatically when inventory falls to a calculated reorder point.\n\n## Why it matters\nPoor replenishment is the root cause of both stockouts (lost revenue) and overstock (wasted capital) — the two most costly inventory failures in any supply chain.\n\n## Key takeaway\nGood replenishment is invisible — customers find what they need, shelves are never empty, and warehouses are never bursting.`,
        "Warehouse Operations Overview": `## What is it?\nWarehouse operations cover all activities within a storage facility — receiving, put-away, storage, picking, packing, and shipping — executed to fulfil customer orders accurately and on time.\n\n## Why it matters\nWarehouse costs typically represent 20–30% of total logistics spend, and warehouse accuracy directly determines whether customers receive the right product, on time, in the right condition.\n\n## Key takeaway\nA well-run warehouse is a competitive weapon — companies like Amazon have turned fulfilment speed and accuracy into the primary reason customers choose them.`,
        "Transportation Modes & Networks": `## What is it?\nTransportation management covers the selection, planning, and execution of physical goods movement using road, rail, air, sea, or intermodal networks — balancing cost, speed, reliability, and carbon footprint.\n\n## Why it matters\nTransportation is typically the single largest component of logistics cost, and delivery speed and reliability are now primary drivers of customer satisfaction in both B2C and B2B markets.\n\n## Key takeaway\nThe best supply chains don't just pick the cheapest mode — they engineer their transport network to match service requirements, cost targets, and sustainability goals simultaneously.`,
        "Supply Chain KPIs (OTIF, Fill Rate, Inventory Turns)": `## What is it?\nSupply chain KPIs are the quantitative metrics used to measure end-to-end performance — covering service, inventory, cost, and speed — to identify where the chain is winning and where it is breaking down.\n\n## Core KPIs\n- **OTIF (On Time In Full):** % of orders delivered on time and complete — the gold standard service measure\n- **Fill Rate:** % of demand fulfilled from available stock at point of order\n- **Inventory Turns:** Cost of goods sold ÷ average inventory — measures how efficiently stock is deployed\n- **Cash-to-Cash Cycle:** Days between paying suppliers and receiving customer payment\n- **Perfect Order Rate:** % of orders with zero errors across all dimensions\n\n## Key takeaway\nWhat gets measured gets managed — but only the right KPIs, tracked at the right frequency, drive the right behaviours.`
      }
    },
    items: [
      "What is Supply Chain Management",
      "Logistics & Distribution Basics",
      "Procurement & Sourcing Fundamentals",
      "Inventory Management Essentials",
      "Demand Planning Basics",
      "Replenishment Planning Basics",
      "Warehouse Operations Overview",
      "Transportation Modes & Networks",
      "Supply Chain KPIs (OTIF, Fill Rate, Inventory Turns)"
    ]
  },

  {
    title: "Core Planning & Execution",
    badge: "Core",
    content: {
      overview: `## What is it?\nCore planning and execution covers the integrated processes that translate demand signals into production schedules, inventory positions, and fulfilment actions — connecting the commercial plan to physical operations.\n\n## Why it matters\nWithout integrated planning, demand and supply operate in silos — resulting in excess inventory in some locations, stockouts in others, and constant firefighting instead of proactive management.\n\n## Key frameworks\n- S&OP: aligns demand, supply, and finance monthly\n- IBP: extends S&OP with a longer horizon and strategic inputs\n- MRP/MRPII: drives material and capacity requirements from the production plan\n- ERP: the system backbone that executes the plan`,
      topics: {}
    },
    items: [
      "Sales & Operations Planning (S&OP)",
      "Integrated Business Planning (IBP)",
      "Material Requirements Planning (MRP)",
      "Capacity Planning",
      "Master Production Scheduling (MPS)",
      "Distribution Requirements Planning (DRP)",
      "Collaborative Planning, Forecasting & Replenishment (CPFR)",
      "Supply Chain Risk Management"
    ]
  },

  {
    title: "Forecasting Fundamentals",
    badge: "Analytical",
    content: {
      overview: `## What is it?\nForecasting fundamentals cover the core concepts, methods, and error metrics used to predict future demand — forming the analytical foundation for all planning and replenishment decisions.\n\n## Why it matters\nEvery inventory, production, and purchasing decision downstream is built on a forecast. Weak forecasting fundamentals mean every downstream decision inherits that weakness.\n\n## Core concepts\n- Qualitative vs quantitative methods\n- Time series decomposition: trend, seasonality, cycle, noise\n- Forecast error measurement: MAPE, MAD, RMSE, bias\n- Forecast horizon and review cycle selection`,
      topics: {}
    },
    items: [
      "Qualitative Forecasting (Judgmental, Delphi)",
      "Time Series Forecasting",
      "Causal Forecasting",
      "Short-Term vs Long-Term Forecasting",
      "Forecast Accuracy Metrics (MAPE, WAPE, Bias)",
      "Forecast Error Analysis",
      "Seasonality & Trend Identification",
      "Demand Segmentation (ABC/XYZ)"
    ]
  },

  {
    title: "Forecasting Models",
    badge: "Analytical",
    content: {
      overview: `## What is it?\nForecasting models are the statistical and machine learning algorithms used to generate demand predictions from historical data — ranging from simple moving averages to deep learning architectures.\n\n## Why it matters\nThe right model for the right SKU can reduce forecast error by 20–40%, directly translating to lower safety stock, fewer stockouts, and better service levels.\n\n## Model selection guide\n- Stable demand → Simple Exponential Smoothing (SES)\n- Trend present → Holt's / DES\n- Seasonal + trend → Holt-Winters / TES\n- Complex patterns → ARIMA / SARIMA\n- Many SKUs with rich data → ML (XGBoost, Random Forest)\n- Long-horizon or sequence patterns → LSTM, Transformers`,
      topics: {}
    },
    items: [
      "Moving Average Models",
      "Exponential Smoothing (SES, DES, TES)",
      "ARIMA / SARIMA Models",
      "Croston's Method (Intermittent Demand)",
      "Regression Models",
      "Machine Learning Forecasting (XGBoost, Random Forest)",
      "Deep Learning Forecasting (LSTM, Transformers)",
      "Probabilistic Forecasting"
    ]
  },

  {
    title: "Forecasting Parameters (Required Inputs)",
    badge: "Analytical",
    content: {
      overview: `## What is it?\nForecasting parameters are the master data inputs and configuration settings that every demand planning and replenishment system requires to generate accurate, actionable outputs.\n\n## Why it matters\nEven the most sophisticated forecasting model produces garbage output if the underlying parameters are wrong, missing, or inconsistent. Parameter quality is often a bigger driver of forecast error than model selection.\n\n## Parameter categories\n- Demand history inputs (what happened)\n- Item master parameters (what the product is)\n- Planning parameters (how the system should behave)\n- Hierarchy & classification parameters (how items are grouped and treated)\n- Lifecycle & transition parameters (where the product is in its journey)`,
      topics: {
        "Historical Demand Data": `## What is it?\nHistorical demand data is the cleaned, validated record of past customer demand — the primary input for all statistical forecasting models.\n\n## Key considerations\n- Use shipment data adjusted for lost sales, not raw orders\n- Cleanse outliers caused by promotions, stockouts, or one-off events before modelling\n- Minimum history requirement: 2× the seasonality period (e.g. 24 months for annual seasonality)\n- Store at the right granularity: daily for fast-moving, weekly for mid-range, monthly for slow-moving\n\n## Key takeaway\nA model trained on uncleaned history learns the noise as well as the signal — always invest in data quality before model complexity.`,

        "Lead Time & Lead Time Variability": `## What is it?\nLead time is the elapsed time between placing a replenishment order and receiving it into stock. Lead time variability is the standard deviation of that elapsed time across historical orders.\n\n## Why both matter\nSafety stock is calculated using both average lead time and its variability. A supplier with a 14-day average lead time and ±1 day variability requires far less safety stock than one with the same average but ±5 days variability.\n\n## Formula link\nSafety Stock = Z × σ_demand × √LT + Z × avg_demand × σ_LT\n\n## Key takeaway\nReducing lead time variability (supplier reliability) is often more impactful on inventory investment than reducing average lead time.`,

        "Service Level Targets": `## What is it?\nService level targets define the probability of fulfilling demand from available stock without a stockout — directly setting the Z-score used in safety stock calculations.\n\n## Common service level definitions\n- **Cycle service level (CSL):** probability of no stockout per replenishment cycle\n- **Fill rate:** % of demand units fulfilled from stock (type II)\n- **OTIF:** on time in full — combines timing and quantity\n\n## Z-score reference\n- 90% CSL → Z = 1.28\n- 95% CSL → Z = 1.65\n- 99% CSL → Z = 2.33\n\n## Key takeaway\nMoving from 95% to 99% service level roughly doubles safety stock — always validate the commercial value of each service level increment before committing inventory.`,

        "Seasonality Index": `## What is it?\nA seasonality index expresses demand in a given period as a ratio of average demand — quantifying how much higher or lower a period's demand is relative to the annual mean.\n\n## Example\nIf average monthly demand is 1,000 units and December demand is typically 1,800 units, the December seasonality index = 1.8. A model multiplies the base forecast by 1.8 for December.\n\n## How it's calculated\nSeasonality Index (period p) = Average demand in period p across all years ÷ Overall average demand\n\n## Key takeaway\nSeasonality indices should be recalculated at least annually and validated against commercial events — a product range change or new customer can permanently shift the seasonal pattern.`,

        "Trend Coefficients": `## What is it?\nTrend coefficients quantify the direction and rate of change in underlying demand — expressed as units per period (additive) or % growth per period (multiplicative).\n\n## Why it matters\nA model that ignores a consistent +5% monthly growth trend will systematically under-forecast by an increasing margin every period, leading to chronic stockouts.\n\n## In exponential smoothing\nDouble Exponential Smoothing (Holt's method) uses a trend smoothing parameter β (0–1) to control how quickly the trend estimate responds to new data. Low β = stable long-term trend; high β = reactive to recent changes.\n\n## Key takeaway\nTrend coefficients need periodic review — a trend driven by a promotional campaign looks identical to organic growth in the data until the campaign ends.`,

        "Safety Stock Parameters": `## What is it?\nSafety stock parameters are the inputs to the safety stock formula — service level target, demand variability, lead time, and lead time variability — that collectively determine the buffer inventory held against uncertainty.\n\n## Core formula\nSS = Z × √(LT × σ²_demand + avg_demand² × σ²_LT)\n\nWhere:\n- Z = service level Z-score\n- LT = average lead time (periods)\n- σ_demand = standard deviation of demand per period\n- σ_LT = standard deviation of lead time\n\n## Key takeaway\nSafety stock is not a gut-feel buffer — it is a mathematically derived quantity. Every assumption in the formula should be reviewed quarterly and updated when supply or demand conditions change.`,

        "Reorder Point Inputs": `## What is it?\nThe reorder point (ROP) is the inventory level that triggers a replenishment order — calculated to ensure stock doesn't run out during the replenishment lead time.\n\n## Formula\nROP = (Average daily demand × Average lead time in days) + Safety Stock\n\n## Example\n- Average daily demand: 50 units\n- Average lead time: 10 days\n- Safety stock: 120 units\n- ROP = (50 × 10) + 120 = **620 units**\n\nWhen on-hand inventory hits 620 units, place a replenishment order.\n\n## Key takeaway\nROP parameters must be kept current — a lead time that has increased from 10 to 15 days without updating the ROP will cause regular stockouts.`,

        "Minimum Order Quantity (MOQ)": `## What is it?\nMinimum Order Quantity is the smallest quantity a supplier will accept per order — a constraint that directly affects replenishment frequency, order sizing, and inventory levels.\n\n## Impact on planning\nA high MOQ relative to demand forces infrequent large orders, increasing cycle stock and cash tied up in inventory. A low MOQ enables more frequent smaller orders and leaner inventory.\n\n## MOQ vs EOQ tension\nEOQ (Economic Order Quantity) calculates the optimal order size from a cost perspective. When MOQ > EOQ, the supplier's constraint overrides the mathematical optimum — and the inventory cost difference should be factored into supplier negotiations.\n\n## Key takeaway\nMOQ is a negotiable commercial parameter, not a fixed constraint — reducing MOQ by 50% often reduces inventory investment by more than the unit price increase it triggers.`,

        "Supplier Lead Time Reliability": `## What is it?\nSupplier lead time reliability measures how consistently a supplier delivers within their quoted lead time — typically expressed as % of orders delivered on or before the promised date.\n\n## Why it directly affects inventory\nEvery percentage point of lead time unreliability translates directly into safety stock. A supplier delivering on time 95% of the time requires measurably more buffer than one delivering 99% on time.\n\n## How to measure\n- Track actual receipt date vs promised date for every PO line\n- Calculate mean and standard deviation of lead time across 12+ months\n- Use the standard deviation in safety stock formula (σ_LT)\n\n## Key takeaway\nSupplier reliability data is one of the highest-value inputs in the forecasting and replenishment system — yet most companies track it informally if at all.`,

        "Demand Variability (Standard Deviation)": `## What is it?\nDemand variability is the statistical dispersion of demand around its mean — measured as standard deviation (σ) — and is the primary driver of safety stock requirements.\n\n## High vs low variability items\n- Low σ (CV < 0.5): stable demand — standard SES/ARIMA models, low safety stock\n- Medium σ (CV 0.5–1.0): moderate variability — review forecast method, moderate buffer\n- High σ (CV > 1.0): highly variable / intermittent — use Croston's or probabilistic methods, high buffer or accept stockout risk\n\nCV = Coefficient of Variation = σ ÷ mean demand\n\n## Key takeaway\nHigh-CV items are the biggest inventory challenge. Reducing variability through better customer collaboration (VMI, forecasting sharing) is often more valuable than optimising the replenishment algorithm.`,

        "Forecast Error Metrics (MAD, MSE, RMSE)": `## What is it?\nForecast error metrics quantify the difference between forecasted and actual demand — used to select the best model, identify systematic bias, and track improvement over time.\n\n## Core metrics\n- **MAD (Mean Absolute Deviation):** average absolute error in original units — easy to interpret\n- **MSE (Mean Squared Error):** penalises large errors heavily — sensitive to outliers\n- **RMSE (Root Mean Squared Error):** √MSE — in original units, penalises large errors\n- **MAPE (Mean Absolute Percentage Error):** error as % of actuals — enables cross-SKU comparison\n- **Bias:** mean signed error — detects systematic over- or under-forecasting\n\n## Key takeaway\nAlways track bias alongside MAPE — a model with low MAPE but high bias is systematically wrong in one direction, which is often worse than random error for inventory planning.`,

        "Lifecycle Stage (New, Mature, Decline)": `## What is it?\nLifecycle stage classifies each SKU's position in its commercial life — from introduction through growth, maturity, and decline — and drives which forecasting method and planning parameters are applied.\n\n## Stage characteristics\n- **Introduction (NPI):** no or sparse history; use like-item seeding or causal models; set conservative initial parameters\n- **Growth:** rapidly increasing demand; trend-sensitive models (Holt's); review parameters frequently\n- **Maturity:** stable demand; standard statistical models perform well; focus on efficiency\n- **Decline (EOL):** decreasing demand; standard models over-forecast; apply trend dampening; plan inventory liquidation\n\n## Key takeaway\nApplying a maturity-stage model to an EOL item produces systematically inflated forecasts and excess inventory. Lifecycle stage flags in the item master are not optional — they are a core planning parameter.`,

        "Product Data Hierarchy": `## What is it?\nProduct data hierarchy defines how individual SKUs are grouped and rolled up across multiple levels — from the base item up through variants, families, categories, and business units — forming the structural backbone of any forecasting model.\n\n## Typical hierarchy levels\n- **SKU / Item** — most granular unit (e.g. "Blue T-shirt, Size M, SKU-00421")\n- **Variant group** — colour/size groupings of the same base product\n- **Product family** — items sharing design, production, or sourcing traits\n- **Category / Sub-category** — commercial groupings (e.g. Tops → T-shirts)\n- **Brand / Range** — marketing or commercial brand groupings\n- **Business unit / Division** — P&L or organisational rollup\n\n## Example\nA retailer sells a polo shirt in 3 colours × 5 sizes = 15 SKUs. These roll up to 1 product family ("Classic Polo"), then to "Menswear Tops" category, then to "Apparel" division. Forecasting runs at family level; replenishment executes at SKU level.\n\n## Why it matters for forecasting\nRunning models at the wrong level introduces noise or loses signal. A clean hierarchy lets you aggregate forecasts upward and disaggregate plans downward consistently.\n\n## Key takeaway\nGarbage hierarchy = garbage forecast. Validate your product master before tuning any model.`,

        "Enterprise Product Hierarchy Parameters": `## What is it?\nEnterprise product hierarchy parameters are master data attributes assigned at each level of the product tree that drive how forecasting, replenishment, and planning systems treat each item — covering classification codes, planning parameters, and system flags.\n\n## Core parameters by level\n- **Global item attributes** — base unit of measure, weight, dimensions, shelf life, hazmat flag\n- **Planning parameters** — forecast model assignment, review cycle, horizon, smoothing constants\n- **Sourcing parameters** — lead time, MOQ, supplier code, country of origin\n- **Commercial parameters** — ABC/XYZ class, lifecycle stage, seasonality index\n- **Organisational parameters** — plant/DC assignment, sales org, distribution channel, valuation class\n\n## Example (SAP context)\nIn SAP, MRP Type controls whether an item is forecast-driven (VV), reorder point (VB), or manual (ND). A mis-coded MRP Type on 500 SKUs means the system silently ignores your forecasts for all of them.\n\n## Why it matters\nERP and APS systems (SAP, Oracle, Kinaxis) drive automated planning directly from these parameters. A wrong lead time or lifecycle stage cascades into every replenishment order the system generates.\n\n## Key takeaway\nProduct hierarchy parameters are not just data admin — they are the levers that control how your planning engine behaves for every single SKU.`,

        "Item & Transition Item Differentiation": `## What is it?\nItem differentiation classifies SKUs by their demand behaviour and lifecycle status so that the right forecasting method and planning rules are applied to each. Transition items are SKUs actively moving between lifecycle stages — requiring special handling to avoid over- or under-forecasting.\n\n## Item types\n- **Active / Mature item** — stable history, standard statistical forecasting applies (e.g. ARIMA, SES)\n- **New item (NPI)** — no history; requires like-item seeding, market analogue, or causal models\n- **Transition item** — SKU being introduced, replaced, or phased out; historical data is partially valid\n- **End-of-Life (EOL) item** — declining demand; standard models over-forecast; use trend dampening\n- **Promotional item** — demand spikes driven by events, not underlying trend\n- **Lumpy / Intermittent item** — sporadic demand; use Croston's method, not standard time series\n\n## Transition item examples\n- **Range change:** Old blue widget (SKU-A) is replaced by new blue widget (SKU-B). SKU-A history is used to seed SKU-B forecast during the transition window.\n- **Pack size change:** 500ml bottle replaced by 750ml. Volume demand must be converted before applying as a like-item seed.\n- **Reformulation:** Same brand, new formula. Partial history carryover with a correction factor applied.\n\n## Why it matters\nApplying a mature-item model to a transition SKU produces a forecast that is consistently wrong in a predictable direction — always too high on EOL items and too low on NPI items.\n\n## Key takeaway\nAlways flag transition items explicitly in your planning system. Most ERP/APS tools have a phase-in/phase-out parameter specifically for this — use it.`,

        "Like Item Modelling": `## What is it?\nLike item (or analogue) modelling is the technique used to generate a forecast for a new or transitioning SKU that has insufficient sales history, by borrowing and adjusting the demand pattern of a reference item that behaves similarly.\n\n## How it works\n1. **Select the like item** — identify a proxy SKU with comparable demand profile (same category, channel, price tier, customer base)\n2. **Apply a ratio / index** — scale the like item's history to reflect expected size difference (e.g. new SKU expected to sell at 80% of the proxy)\n3. **Set a transition window** — define how many weeks/months the like-item seed drives the forecast before actual sales history takes over\n4. **Blend** — as actuals accumulate, gradually weight from like-item seed toward statistical model (e.g. weeks 1–4: 100% seed; weeks 5–8: 50/50; week 9+: 100% actuals)\n\n## Worked example\n**New product:** "Mango Protein Bar 60g" launching in March — zero history.\n**Like item:** "Berry Protein Bar 60g" — same format, same retailer, same shelf position, launched 18 months ago.\n**Ratio:** Market research suggests mango will outsell berry by 20% → ratio = 1.2.\n**Seed forecast week 1:** Berry sold 400 units → Mango forecast = 400 × 1.2 = **480 units**.\n**By week 8:** Mango has 6 weeks of actuals averaging 510 units → blend shifts to actuals-dominant.\n\n## Common pitfalls\n- Choosing a like item from a different channel or customer segment\n- Forgetting to adjust for pack size or unit of measure differences\n- Not setting a hard cutover date — leaving the seed running indefinitely\n\n## Key takeaway\nLike item modelling is the single most impactful technique for NPI forecast accuracy. A well-chosen analogue with a sensible ratio outperforms any statistical model run on sparse early data.`
      }
    },
    items: [
      "Historical Demand Data",
      "Lead Time & Lead Time Variability",
      "Service Level Targets",
      "Seasonality Index",
      "Trend Coefficients",
      "Safety Stock Parameters",
      "Reorder Point Inputs",
      "Minimum Order Quantity (MOQ)",
      "Supplier Lead Time Reliability",
      "Demand Variability (Standard Deviation)",
      "Forecast Error Metrics (MAD, MSE, RMSE)",
      "Lifecycle Stage (New, Mature, Decline)",
      "Product Data Hierarchy",
      "Enterprise Product Hierarchy Parameters",
      "Item & Transition Item Differentiation",
      "Like Item Modelling"
    ]
  },

  {
    title: "Replenishment Planning",
    badge: "Operations",
    content: {
      overview: `## What is it?\nReplenishment planning is the process of determining when and how much to reorder — using demand forecasts, inventory levels, lead times, and cost parameters to generate purchase and transfer orders automatically.\n\n## Why it matters\nReplenishment directly controls the two most expensive inventory failures: stockouts (lost sales, customer dissatisfaction) and overstock (wasted capital, write-offs, markdown risk).\n\n## Core replenishment methods\n- ROP (Reorder Point): order when stock hits a threshold\n- Min/Max: order up to max when stock hits min\n- EOQ (Economic Order Quantity): mathematically optimal order size\n- Periodic Review: order at fixed intervals\n- VMI (Vendor Managed Inventory): supplier manages replenishment`,
      topics: {}
    },
    items: [
      "Reorder Point (ROP) Method",
      "Min/Max Replenishment",
      "Economic Order Quantity (EOQ)",
      "Periodic Review Systems",
      "Vendor Managed Inventory (VMI)",
      "Multi-Echelon Inventory Optimisation (MEIO)",
      "Replenishment in Omnichannel",
      "Automated Replenishment Systems"
    ]
  },

  {
    title: "Supply Chain Systems & Technology",
    badge: "Digital",
    content: {
      overview: `## What is it?\nSupply chain systems are the software platforms that plan, execute, and track every physical and financial flow across the supply chain — from ERP and WMS to advanced planning and analytics tools.\n\n## Why it matters\nModern supply chains are too complex and fast-moving to manage manually. The right technology stack automates routine decisions, surfaces exceptions, and enables planners to focus on high-value judgement calls.\n\n## Core system landscape\n- ERP: enterprise backbone (SAP, Oracle, Microsoft)\n- WMS: warehouse execution\n- TMS: transport planning and execution\n- APS/IBP: advanced demand and supply planning\n- BI/Analytics: performance visibility`,
      topics: {}
    },
    items: [
      "ERP Systems (SAP, Oracle, Microsoft)",
      "Warehouse Management Systems (WMS)",
      "Transportation Management Systems (TMS)",
      "Advanced Planning & Scheduling (APS)",
      "Supply Chain Control Towers",
      "EDI & B2B Integration",
      "Supply Chain Analytics Platforms",
      "Cloud vs On-Premise Architecture"
    ]
  },

  {
    title: "Supply Chain Analytics & Optimisation",
    badge: "Advanced",
    content: {
      overview: `## What is it?\nSupply chain analytics transforms raw operational data into actionable intelligence — using descriptive, diagnostic, predictive, and prescriptive techniques to optimise decisions across the entire network.\n\n## Why it matters\nAnalytics converts the vast data generated by modern supply chains into competitive advantage — identifying inefficiencies, predicting disruptions, and automating optimisation at a scale no human team can match.\n\n## Analytics maturity levels\n- Descriptive: what happened (dashboards, reports)\n- Diagnostic: why it happened (root cause analysis)\n- Predictive: what will happen (forecasting, risk models)\n- Prescriptive: what to do about it (optimisation, recommendations)`,
      topics: {}
    },
    items: [
      "Descriptive vs Predictive vs Prescriptive Analytics",
      "Supply Chain Network Design",
      "Inventory Optimisation Models",
      "Linear Programming & Solver Methods",
      "Simulation Modelling (Monte Carlo)",
      "Scenario Planning & What-If Analysis",
      "Supplier Performance Analytics",
      "Carbon Footprint Analytics"
    ]
  },

  {
    title: "Modern & Digital Supply Chain",
    badge: "Digital",
    content: {
      overview: `## What is it?\nThe modern supply chain is being transformed by digital technologies — AI, IoT, blockchain, digital twins, and robotics — that increase speed, visibility, resilience, and sustainability across every node.\n\n## Why it matters\nCompanies that successfully digitalise their supply chains report 15–30% reductions in inventory, 20–50% faster planning cycles, and significantly higher resilience to disruption.\n\n## Key technology areas\n- AI/ML: demand sensing, autonomous replenishment, NLP for supplier risk\n- IoT: real-time asset and inventory tracking\n- Digital twins: virtual supply chain simulation\n- Blockchain: immutable traceability and provenance\n- Robotics & automation: warehouse and last-mile execution`,
      topics: {}
    },
    items: [
      "AI & Machine Learning in Supply Chain",
      "Internet of Things (IoT) in Logistics",
      "Digital Twins",
      "Robotics & Automation in Warehousing",
      "Blockchain for Traceability",
      "Autonomous Vehicles & Drones",
      "Sustainability & Green Supply Chain",
      "Supply Chain Resilience & Risk"
    ]
  },

  {
    title: "Supply Chain Data & Governance",
    badge: "Data",
    content: {
      overview: `## What is it?\nSupply chain data governance ensures that the master data, transactional data, and analytics outputs driving every planning and execution decision are accurate, consistent, complete, and trustworthy.\n\n## Why it matters\nData quality is the single biggest hidden cost in most supply chains. Bad master data silently distorts every forecast, every replenishment order, and every KPI — often without anyone realising.\n\n## Key data domains\n- Item master data: the foundation of all planning\n- Supplier and customer master: drives procurement and fulfilment\n- Inventory data: real-time accuracy is critical\n- Transactional data: orders, receipts, shipments\n- Analytics data: aggregated KPIs and trends`,
      topics: {}
    },
    items: [
      "Master Data Management (MDM)",
      "Data Quality & Cleansing",
      "Item Master Data Standards",
      "Supply Chain Data Architecture",
      "Real-Time Data & Event Streaming",
      "Data Governance Frameworks",
      "Supply Chain Reporting & BI",
      "Regulatory & Compliance Data"
    ]
  },

  {
    title: "Industry Applications",
    badge: "Core",
    content: {
      overview: `## What is it?\nIndustry applications explore how core supply chain principles are adapted and applied across specific sectors — each with its own regulatory environment, demand patterns, product characteristics, and operational constraints.\n\n## Why it matters\nA supply chain professional who understands both the fundamentals and their industry's specific requirements is significantly more effective than one who knows only the theory.\n\n## Key industries covered\n- Pharma & cold chain: GDP, serialisation, temperature control\n- Automotive: JIT, KANBAN, tier 1/2/3 supplier networks\n- Retail: omnichannel, markdown optimisation, fast fashion\n- E-commerce: fulfilment speed, last-mile, returns`,
      topics: {}
    },
    items: [
      "Pharma & Cold Chain Logistics",
      "Automotive Supply Chain",
      "Retail Supply Chain",
      "E-commerce Fulfilment",
      "Food & Beverage Supply Chain",
      "Fashion & Apparel Supply Chain",
      "Electronics & High-Tech Supply Chain",
      "Public Sector & Humanitarian Supply Chain"
    ]
  }
];
