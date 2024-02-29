##Please read this before using the app!!!!!

## Vehicle Management System

The Vehicle Management System is a comprehensive software solution designed to efficiently manage and monitor the maintenance of vehicles. Users can sign up, log in, and seamlessly track the maintenance status of their vehicles with real-time updates.

## Live Model

You can interact with a live model of the Vehicle Management System. Visit https://vms-tau.vercel.app/ to access the system and explore its features.

- **Demo Credentials for adminLogin:**
- For able to login to securitypanle change the URL from  "https://vms-tau.vercel.app/" to " https://vms-tau.vercel.app/adminlogin"
  - Username: superUser@gmail.com
  - Password: admin123

- **Credentials of Default Purchase Number**
- 1.123




## How it Works

1. **User Registration:**
   - New users can sign up to create an account.
   - Upon successful registration, users can log in using their credentials.

2. **Vehicle Information Entry:**
   - After logging in, users are prompted to enter their vehicle details, including vehicle number, purchase number, delivery challan, and a photo of the vehicle.
   - Based on the purchase order number, the system retrieves and displays vendor details, including the vendor's company name and name. Additionally, it shows other products from the same vendor associated with the purchase order number.

3. **Maintenance Status Tracking:**
   - Users can check the real-time status of maintenance work being done on their vehicles.
   - Refreshing the page or logging in again allows users to view the latest maintenance status.

4. **Security Team Updates:**
   - The security team, authorized with separate login credentials, updates the maintenance status of vehicles.
   - Both users and the security team have access only to their designated routes, ensuring data privacy and security.

5. **MongoDB Integration:**
   - All user, vendor, product, and maintenance details are securely stored in MongoDB.
   - MongoDB serves as the centralized database, creating and maintaining user-specific data based on the information provided during vehicle check-in.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and configured

### Installation

1. Clone the repository: `git clone https://github.com/your-username/vehicle-management-system.git`
2. Navigate to the project directory: `cd vehicle-management-system`
3. Install dependencies: `npm install`
4. Configure MongoDB connection in `config.js` file.
5. Run the application: `npm start`

## Security

- User and security team access is authenticated to ensure data integrity.
- Secure communication with MongoDB for data storage.


## Acknowledgments

-Tailwindcss
-Flowbite
-TailwindTap

Feel free to customize this template according to the specific details of your Vehicle Management System project. Ensure to replace placeholder text with your actual project information, and add any badges, screenshots, or other relevant details that will help users and contributors understand and use your system effectively.
