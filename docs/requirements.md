# SmartBiz — Software Requirements Specification

**Project Name:** SmartBiz  
**Project Type:** Full-Stack Business Intelligence Platform  
**Version:** 1.0 (Initial Draft)  
**Status:** Planning

---

## 1. Introduction

### 1.1 Project Overview

SmartBiz is a web-based Business Intelligence and Sales
Forecasting Platform designed to help small and medium-sized
businesses analyze sales performance, monitor financial
indicators, evaluate product performance, and forecast
future sales.

The platform aims to support data-driven business
decision-making through interactive dashboards,
automated reports, and machine learning.

### 1.2 Problem Statement

Small and medium-sized businesses may rely on
spreadsheets and manual calculations to monitor sales,
revenue, and profitability.

These processes can become time-consuming and make
it difficult to identify business trends and obtain
consistent insights.

SmartBiz proposes a centralized platform for sales
data management, business analytics, reporting,
and forecasting.

### 1.3 Project Objectives

1. Develop a centralized platform for managing sales data.
2. Provide interactive sales analytics dashboards.
3. Calculate revenue, costs, and gross profit.
4. Analyze product and category performance.
5. Implement machine learning-based sales forecasting.
6. Generate downloadable business reports.
7. Implement secure authentication and role-based access.

---

## 2. Target Users

### Administrator
- Manage users and access permissions.
- Manage organization settings.
- Monitor data imports and system activity.

### Business Manager
- Upload sales data.
- Monitor business performance.
- View analytics and forecasting results.
- Generate business reports.

### Business Analyst
- Analyze sales and product performance.
- Apply filters to business data.
- Generate forecasts and reports.

### Viewer
- View authorized dashboards and reports.
- Access business insights in read-only mode.

---

## 3. Functional Requirements

### FR-01: User Authentication

The system shall allow authorized users to log in
securely and access functions based on their roles.

### FR-02: Sales Data Import

The system shall allow authorized users to upload
sales data using CSV files.

The system shall validate uploaded data before
importing it into the database.

### FR-03: Sales Analytics Dashboard

The system shall provide an interactive dashboard
displaying revenue, gross profit, total sales,
and sales trends.

### FR-04: Revenue and Profit Analysis

The system shall calculate revenue, cost of goods
sold, gross profit, and gross profit margin based
on available sales data.

### FR-05: Product Performance Analysis

The system shall display best-selling products,
product revenue, category performance, and
product profitability.

### FR-06: Sales Forecasting

The system shall use historical sales data and
machine learning techniques to predict future
sales performance.

### FR-07: Business Reports

The system shall allow authorized users to
generate and download business performance reports.

### FR-08: Role-Based Access Control

The system shall restrict access to protected
features and business data based on assigned roles.

### FR-09: Data Import History

The system shall maintain records of CSV uploads,
including their status and validation results.

### FR-10: Organization Data Isolation

The system shall ensure that users can access
only the business data they are authorized to view.

---

## 4. Non-Functional Requirements

### NFR-01: Security

The system shall protect user credentials,
enforce authorization, and validate input data.

### NFR-02: Usability

The system shall provide a modern, responsive,
and user-friendly interface.

### NFR-03: Maintainability

The application shall follow modular architecture
and consistent coding standards.

### NFR-04: Reliability

The system shall handle invalid inputs and
unexpected errors without corrupting stored data.

### NFR-05: Performance

The application shall support efficient data
retrieval and analytics for its defined
target workload.

### NFR-06: Testability

Major system modules shall be covered by
automated tests.

### NFR-07: Documentation

The project shall maintain installation,
architecture, API, and testing documentation.

---

## 5. Technology Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- Python
- FastAPI

### Database
- PostgreSQL

### Data Analytics
- Pandas

### Machine Learning
- scikit-learn

### Version Control
- Git and GitHub

---

## 6. Currency and Financial Rules

- The default currency shall be Sri Lankan Rupees (LKR).
- Monetary values shall be stored using decimal-safe
  database types.
- Revenue shall be calculated from recorded sales.
- Gross profit shall be calculated as revenue minus
  cost of goods sold.
- Financial reports shall clearly identify the
  metrics being displayed.
- Historical transaction prices and costs shall
  remain unchanged when product prices are updated.

---

## 7. Initial Project Scope

### In Scope
- Authentication and authorization
- CSV sales data import
- Sales analytics dashboards
- Revenue and gross profit analysis
- Product performance analysis
- Sales forecasting
- Downloadable business reports
- Administrative user management

### Out of Scope for Initial Release
- Payment processing
- E-commerce checkout
- Inventory purchasing
- Accounting ledger management
- Native Android and iOS applications

---

## 8. Development Approach

The project will follow an incremental,
Agile-inspired development approach.

Each major module will be developed,
tested, documented, and committed to GitHub
before proceeding to the next module.

---

## 9. Project Status

Current Phase: Requirements Engineering

Next Activities:
- Detailed user stories and acceptance criteria
- Database entity relationship design
- API endpoint planning
- UI wireframe design