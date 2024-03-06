# **PeachJB Installation Guide**

# **Step 1: Preparing SapphireOS**

**1a. Ensure SapphireOS Compatibility:**
   Before proceeding with the installation of PeachJB, ensure that you have the latest version of SapphireOS available. Compatibility with newer versions is recommended for optimal performance and compatibility with PeachJB features. Visit code.org to remix SapphireOS, ensuring compatibility with PeachJB. Please note that the oldest supported version of SapphireOS is 0.7.

**1b. Data Configuration:**
   Navigate to the "Data" directory within SapphireOS and locate the "Key/Value Pairs" section. Copy the data configuration provided in the accompanying [image](https://media.discordapp.net/attachments/1202829724796059728/1208898647668949062/TokE8ER.png?ex=65ee3019&is=65dbbb19&hm=02b812f143177783ebf3c64cb3938dfee49d40543905e0f47e4e99a5eb6dbf58&=&format=webp&quality=lossless&width=1044&height=1023). This data is utilized during the boot process of SapphireOS.

# **Step 2: Installing PeachJB**

**2a. Importing Library:**
   This step involves importing the necessary PeachJB library into SapphireOS. Follow the instructions below to ensure successful integration:
   - Click on the cog icon adjacent to the "Toolbox" section.
   - Select "Manage Libraries" and proceed to paste the following unique identifier into the designated field: `NqkDX6Ww_fSR9sNuUAr4Gy-QP9oRDUiG8JQyIm3xwc4` (Please note that this identifier is case-sensitive).
   
**2b. Initialization Process:**
   Once the library has been successfully imported, execute the following code snippet at the beginning of the boot function to initialize PeachJB:
   ```javascript
   PeachAPI.Run("OS");
   ```
   Set "OS" to the OS, EX: "AudioOS", "SapphireOS"

# **Step 3: Importing PeachJB Screens**

**3a. Screens:**
   Youll need the screens PeachJB, so follow these steps:
   - Obtain the latest link from [here](https://discord.com/channels/1194396620872229004/1208892766013095996).
   - Access the "Design" tab within SapphireOS.
   - Navigate to the screen listing section and select "Import Screens".
   - Paste the obtained link and proceed to select all screens prefixed with "peach".

# **Step 4: Optional Enhancements**

**4a. Unlocking Additional Features:**
   For users seeking to explore advanced functionalities within PeachJB, consider implementing the following optional code:
   ```javascript
   PeachAPI.Beta();
   ```
   Integrating this code snippet alongside the PeachAPI.Run() command enhances the capabilities of PeachJB, offering an expanded array of features for experimentation and customization.

*Note: This documentation provides a comprehensive guide for installing and utilizing PeachJB within SapphireOS. For further assistance or inquiries, refer to the accompanying documentation or reach out to our support team.*
