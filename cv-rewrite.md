# Eman Pepars

Dubai, UAE  |  emanpepars2@gmail.com  |  +971 58 556 2001
Portfolio: [your-portfolio-url]  |  LinkedIn: [your-linkedin-url]

---

## PROFESSIONAL SUMMARY

Flutter Developer with **4+ years of production experience** and **12+ live applications** shipped to the App Store and Google Play across the GCC, MENA, US, and European markets. Specialised in cross-platform delivery for **e-commerce, real estate, healthcare, and live auction marketplaces**. Owns the full delivery lifecycle — from architecture and feature development through release and post-launch maintenance. Deep expertise in **Clean Architecture (BLoC/Cubit)**, **real-time systems (Socket.IO)**, and **fintech integrations** including Apple Pay, BNPL providers (Tabby, Tamara), and **UAE PASS** digital identity. Proven track record building production apps with full **Arabic/English RTL support** and **scalable multi-flavor architectures** that power multiple branded storefronts from a single codebase.

---

## CORE SKILLS

- **Flutter & Dart:** Cross-platform development for Android, iOS, and Web
- **Architecture:** Clean Architecture (Presentation, Domain, Data), MVVM, SOLID principles, design patterns, dependency injection (GetIt)
- **State Management:** BLoC, Cubit, Riverpod, Provider, GetX (routing)
- **API & Real-time:** REST APIs (Dio, Retrofit), WebSockets (Socket.IO)
- **Payments & Integrations:** Apple Pay, Google Pay, Tabby, Tamara, UAE PASS, AppsFlyer
- **Firebase:** FCM, Analytics, Crashlytics, Remote Config, Firestore, Realtime Database
- **Storage & Security:** Hive, SharedPreferences, Secure Storage
- **UI & Performance:** Responsive design (ScreenUtil, LayoutBuilder), full RTL support, Lottie animations
- **Navigation & Linking:** Deep Links, Dynamic Links
- **Hardware & Device APIs:** Barcode scanning, camera, geolocation, push notifications
- **DevOps & Tooling:** Git, GitHub, GitLab, CI/CD pipelines, App Store & Google Play release management, Flutter flavors (Flavorizr), code generation (build_runner, json_serializable)

**Languages:** Arabic (Native), English (Professional)

---

## PROFESSIONAL EXPERIENCE

### Flutter Developer — Full-time
**Soldout KSA** — Riyadh, Saudi Arabia  |  Dec 2025 – Present  |  Remote (Dubai)

Build and maintain two production Flutter applications powering a KSA marketplace that combines traditional e-commerce with **live auction functionality**, covering both vendor and customer experiences. *(Both apps live on App Store and Google Play.)*

**Soldout — Customer App (Marketplace + Live Auctions)**
*Tech:* Flutter, Dart, BLoC/Cubit, Dio, Firebase (full suite), Socket.IO, Apple Pay, Tabby, Tamara, AppsFlyer, easy_localization
- Architect and maintain a real-time **auction engine** handling live bidding, time-based winning logic, and post-auction checkout, with `CartCubit`, `AuctionCubit`, and `MainCubit` orchestrating independent state domains under concurrent user load.
- Integrate **Apple Pay, Tabby, and Tamara** to deliver a GCC-native checkout experience that supports installment-based purchasing flows expected by KSA buyers.
- Wire up Firebase Analytics, Remote Config, Firestore, Realtime Database, and AppsFlyer to power product attribution, feature flagging, and behavioural insights.
- Build a **promotional coins and wallet system** with referral tracking and full transaction history, alongside complete Arabic/English RTL localization across every screen using `easy_localization`.

**Soldout — Vendor App**
- Develop merchant-facing features including order tracking, product management, wallet and transaction history, and analytics dashboards, structured on Clean Architecture with strict Presentation / Domain / Data separation.
- Build a **type-safe API layer** leveraging Dio, Retrofit, and JSON code generation to eliminate boilerplate and reduce runtime errors.
- Integrate Firebase Cloud Messaging, Dynamic Links, and local notifications to power reliable merchant communication flows.

---

### Flutter Developer — Full-time
**NTG Clarity** — Cairo, Egypt  |  Jul 2024 – Nov 2025

Contributed to a **dual-app e-commerce ecosystem** (vendor + customer) with sole ownership of a multi-flavor architecture supporting multiple branded storefronts from a single Flutter codebase. *(Both apps live on App Store and Google Play.)*

**Markatty Store — Customer App**
- **Architected a multi-flavor setup** using Flavorizr with isolated Firebase configurations, app icons, splash screens, and environment variables per brand — eliminating the need for duplicate codebases and dramatically simplifying the brand-onboarding workflow.
- Implemented a **hybrid state management strategy** — BLoC for core e-commerce flows, Provider for lighter form and notification modules — and integrated Firebase Messaging, Analytics, Crashlytics, and Remote Config across all flavors.

**Markatty — Vendor App**
- Built order management, authentication, and analytics views on Clean Architecture with BLoC/Cubit; integrated rich media handling, location services (geolocator, geocoding), and secure storage for sensitive merchant data.

---

### Flutter Developer — Full-time
**GS For Applications** — Cairo, Egypt  |  Dec 2023 – Jun 2024

Owned full-lifecycle development across **multiple production Flutter apps**, leading architecture decisions, API integration, and cross-platform releases.

- **Beneshty (E-commerce)** — Drove development of a customer-facing e-commerce app that has reached **100,000+ Google Play installs**, contributing to architecture, core shopping flows, and release management on both App Store and Google Play.
- **Zebra (Barcode Scanning & Inventory Management)** — Built a mobile inventory system using **device barcode scanning** to track items across warehouses, verify stock presence, and manage transfers between inventories — solving real operational visibility problems for multi-warehouse logistics.
- **La Jolie (Cosmetics E-commerce)** — Built a **modular UI component library** and theming system, alongside product browsing, cart, and authentication flows powered by Firebase notifications and GetIt dependency injection — reframing brand customisation as a config problem rather than a code problem.
- Delivered consistent Clean Architecture + Cubit conventions across the portfolio, ensuring long-term maintainability and rapid feature iteration across all apps.

---

### Flutter Developer — Remote
**Revealsite** — United States  |  Oct 2022 – Nov 2023  *(while completing CS degree)*

- Developed and maintained **four production healthcare applications** serving the US and European markets — **J&D Pharmacy, Medical Compounding Pharmacy, Quick RX,** and **Holland Pharmacy** — covering medicine ordering, prescription management, and secure authentication.
- Maintained stability and compliance across Android and iOS in a **regulated healthcare context**; managed the complete app lifecycle including testing, debugging, and release management on both App Store and Google Play.

---

## KEY PROJECTS

### AlMARWAN — Property & Real Estate Management Platform
*Domain:* UAE real estate and property investment  |  *Platforms:* Android, iOS  |  *(Live on App Store)*
*Tech:* Flutter, Dart, Clean Architecture, BLoC/Cubit, Dio, Retrofit, Socket.IO, GetIt, easy_localization, ScreenUtil, Secure Storage
- Built a comprehensive property management platform covering **owned units, payment management, cheque workflows, invoice and receipt tracking, and document management** tailored for UAE-based property investors.
- Integrated **UAE PASS** for government-backed digital identity authentication and **Socket.IO** for real-time payment status and property state updates; delivered seamlessly across Android and iOS from a single codebase.

### La Mode — Fashion E-commerce App
*Domain:* Fashion retail — clothing, footwear, and accessories  |  *(Open-source / personal project)*
*Tech:* Flutter, Dart, Clean Architecture, BLoC, Provider, Dio, Hive, Firebase Messaging, model_viewer_plus, ScreenUtil, easy_localization
- Designed and built a complete fashion shopping experience from scratch, including an **interactive 3D product viewer** (`model_viewer_plus`) — spanning the full user journey from onboarding and OTP authentication through cart, checkout, orders, and promo codes, with full Arabic/English RTL support throughout.

### MetaPharaoh — Ancient Egypt VR App *(Graduation Project — featured in national press)*
*Domain:* Educational technology / immersive learning  |  *Platform:* Oculus Quest 2 (VR)
*Tech:* Unity, Blender, Sketchfab, Flutter, Google Maps API, OpenAI API
- Built an immersive VR application enabling users to explore ancient Egypt through **interactive environments, 3D reconstructions, and guided experiences** on Oculus Quest 2.
- Developed gamified learning flows with quests, multilingual support, and offline access; integrated Google Maps for location context and an **OpenAI-powered chatbot** for interactive educational insights.

---

## EDUCATION

**Bachelor of Science in Computer Science & Artificial Intelligence**  *(GPA: 3.0 / 4.0)*
Cairo University — Cairo, Egypt  |  2019 – 2023
