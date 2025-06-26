# MonApp

📘 AI Agent Tasks – Step-by-Step Instructions (English)

All your internal thoughts, reasoning, planned steps, explanations, logs, and task execution details must be written in Russian.
Use the MCP servers context7 and tavily to assist with context tracking, technical research, and code generation.
🧱 Phase 1: Project Initialization
Task 1.1: Create a WPF (.NET 6+) MVVM-structured desktop project

Folder structure: Views/, ViewModels/, Models/, Services/, Themes/, Resources/, Utils/

Create MainWindow with left sidebar and central content area

Task 1.2: Configure PostgreSQL 17.5 connection

Install Npgsql and Entity Framework Core

Create appsettings.json or equivalent config for DB access

🔐 Phase 2: Authentication & User Roles
Task 2.1: Create Login Window

Fields: username, password

On success → load main UI

Create default user: admin / admin with role "Administrator"

Task 2.2: Create Users table

Fields: id, username, password_hash, full_name, role

Task 2.3: Add user registration form (Admin only)

Validate uniqueness

Allow setting user role

🖥 Phase 3: Core UI Shell
Task 3.1: Implement sidebar navigation

Tabs:

Dashboard, Works, Accidents, Shift Handover, GEO Department, Storage, Ops Communication, Notes, Parameters

Add user block at bottom with full name and theme toggle

Task 3.2: Implement theme switcher (light/dark mode)

Save choice in config or DB

Task 3.3: Display content dynamically based on tab selection

Use MVVM pattern + ContentControl

📂 Phase 4: Page Implementations
Task 4.1: Dashboard

Show:

Total works, accidents, tickets in "Grav. D"

Important tickets separately

Add live data updating (simulate if needed)

Task 4.2: Works & Accidents

Create placeholder pages

Show "Coming soon"

Task 4.3: Shift Handover

Two text fields:

Main shift text

Operational info

Add Save buttons

Store in table shift_reports

Task 4.4: GEO Department

Tree structure:

Topics → Subtopics → Info

Features:

Add/edit/delete/save topics, subtopics, and content

Task 4.5: Storage

Tree of folders and files

Upload files (stored as BLOBs in DB)

Features:

Create folder, upload file, download

Task 4.6: Operational Communication

Admin sends task to user and vice versa

Statuses: New → In Progress → Completed → Archived

Add real-time updates + notifications

Task 4.7: Notes

User-specific private notes

Stored in DB by user ID

Task 4.8: Parameters

Show DB settings (readonly or config file)

Allow admin to manage users

🔁 Phase 5: Real-Time Sync
Task 5.1: Add SignalR server (ASP.NET Core)

Events:

New task assigned

Shift text changed

User status changes

Task 5.2: Connect WPF client to SignalR

Display live updates in UI

🧪 Phase 6: UX and Polish
Task 6.1: Improve layout and responsiveness

Support small window sizes, scrollbars

Task 6.2: Notification system

Icon with badge count

Popup for new messages

