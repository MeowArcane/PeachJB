# **Eclipse Installation Guide**

# **Step 1: Preparing AuroraOS**

**1a. Ensure AuroraOS Compatibility:**
   Before proceeding with the installation of Eclipse, ensure that you have the latest version of AuroraOS available. Compatibility with newer versions is recommended for optimal performance and compatibility with Eclipse features. Visit code.org to remix AuroraOS, ensuring compatibility with Eclipse.

**1b. Data Configuration:**
   Navigate to the "Data" directory within AuroraOS and locate the "Key/Value Pairs" section. Copy the data configuration provided in the accompanying [image](https://media.discordapp.net/attachments/1202829724796059728/1208898647668949062/TokE8ER.png?ex=65ee3019&is=65dbbb19&hm=02b812f143177783ebf3c64cb3938dfee49d40543905e0f47e4e99a5eb6dbf58&=&format=webp&quality=lossless&width=1044&height=1023). This data is utilized during the boot process of AuroraOS.

# **Step 2: Installing Eclipse**

**2a. Importing Library:**
   This step involves importing the necessary Eclipse library into AuroraOS. Follow the instructions below to ensure successful integration:
   - Click on the cog icon adjacent to the "Toolbox" section.
   - Select "Manage Libraries" and proceed to paste the following unique identifier into the designated field: `[COMING SOON]` (Please note that this identifier is case-sensitive).
   
**2b. Initialization Process:**
   Once the library has been successfully imported, execute the following code snippet at the beginning of the code to initialize Eclipse:
   ```javascript
   Eclipse.Run("OS");
   ```
   Replace "OS" to the OS, EX: "AudioOS", "AuroraOS"

# **Step 3: Importing Eclipse Screens**

**3a. Screens:**
   Youll need the screens Eclipse, so follow these steps:
   - Access the "Design" tab within AuroraOS.
   - Navigate to the screen listing section and select "Import Screens".
   - Paste the following link and proceed to select all screens.
Link: [https://studio.code.org/projects/applab/1UE3zMlq8W5LH3DQCwhtO1KK_PW6cbddG2ObLq0Yh3c/edit](https://studio.code.org/projects/applab/1UE3zMlq8W5LH3DQCwhtO1KK_PW6cbddG2ObLq0Yh3c/edit)

# **Step 4: Optional Enhancements**

**4a. Unlocking Additional Features:**
   For users seeking to explore advanced functionalities within Eclipse, consider implementing the following optional code:
   ```javascript
   Eclipse.Beta();
   ```
   Integrating this code snippet alongside the Eclipse.Run() command enhances the capabilities of Eclipse, offering an expanded array of features for experimentation and customization.

*Note: This documentation provides a comprehensive guide for installing and utilizing Eclipse within AuroraOS. For further assistance or inquiries, refer to the accompanying documentation or reach out to our support team.*
