# SmartBiz — Database Design

## 1. Overview

SmartBiz uses PostgreSQL as its relational database.

The database supports:
- User management and authentication
- Organization-level data isolation
- Product management
- Sales transaction management
- CSV import history
- Sales forecasting
- Business reporting
- Audit logging

## 2. Database Tables

### organizations
Stores information about businesses using SmartBiz.

- id (Primary Key)
- name
- created_at

### users
Stores registered user accounts.

- id (Primary Key)
- full_name
- email (Unique)
- password_hash
- is_active
- created_at

### organization_memberships
Connects users with organizations and defines their roles.

- id (Primary Key)
- user_id (Foreign Key)
- organization_id (Foreign Key)
- role
- created_at

Roles: admin, manager, analyst, viewer.

### products
Stores business products.

- id (Primary Key)
- organization_id (Foreign Key)
- name
- sku
- category
- current_price
- current_cost
- created_at

### sales
Stores sales transaction headers.

- id (Primary Key)
- organization_id (Foreign Key)
- sale_reference
- sale_date
- created_at

### sale_items
Stores products included in a sale.

- id (Primary Key)
- sale_id (Foreign Key)
- product_id (Foreign Key)
- quantity
- unit_price_at_sale
- unit_cost_at_sale

### data_imports
Stores CSV file import history.

- id (Primary Key)
- organization_id (Foreign Key)
- uploaded_by (Foreign Key)
- filename
- status
- total_rows
- successful_rows
- failed_rows
- created_at

### forecast_runs
Stores machine learning forecast execution details.

- id (Primary Key)
- organization_id (Foreign Key)
- model_name
- forecast_start_date
- forecast_end_date
- mae
- rmse
- created_at

### forecast_results
Stores individual forecast values.

- id (Primary Key)
- forecast_run_id (Foreign Key)
- forecast_date
- predicted_revenue

### reports
Stores generated business report information.

- id (Primary Key)
- organization_id (Foreign Key)
- generated_by (Foreign Key)
- report_type
- file_path
- created_at

### audit_logs
Stores important system activities.

- id (Primary Key)
- organization_id (Foreign Key)
- user_id (Foreign Key)
- action
- created_at

## 3. Relationships

- One organization has many organization memberships.
- One user has many organization memberships.
- One organization has many products.
- One organization has many sales.
- One sale has many sale items.
- One product can appear in many sale items.
- One organization has many data imports.
- One organization has many forecast runs.
- One forecast run has many forecast results.
- One organization has many reports.
- One organization has many audit logs.

## 4. Financial Rules

- Currency: Sri Lankan Rupees (LKR).
- Monetary values use PostgreSQL NUMERIC data types.
- Revenue = SUM(quantity × unit_price_at_sale).
- Cost of Goods Sold = SUM(quantity × unit_cost_at_sale).
- Gross Profit = Revenue - Cost of Goods Sold.
- Gross Profit Margin = (Gross Profit / Revenue) × 100.
- Gross profit margin is undefined when revenue is zero.
- Historical prices and costs remain unchanged.

## 5. Security Rules

- Passwords must be securely hashed.
- Users can access only authorized organization data.
- Organization membership determines access permissions.
- Sensitive operations should be recorded in audit logs.

## 6. Database Status

Status: Initial Design

Future improvements:
- Detailed column data types
- Constraints and indexes
- Entity Relationship Diagram
- Database migrations