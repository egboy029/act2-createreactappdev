// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner";
import CreateReact from "./components/createreact";
import Features from "./components/features";
import Footer from "./components/footer";
import GettingStarted from "./components/gettingstarted"; // Changed import name to match component
import EasyToMaintain from "./components/easytomaintain"; // Adjusted import name to match component
import "./App.css";

function App() {
  // State for managing dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Data for your components
  const docLinks = [
    {
      label: "Get Started",
      url: "https://create-react-app.dev/docs/getting-started",
    },
    { label: "Learn React", url: "https://react.dev/" },
  ];

  const communityLinks = [
    {
      label: "Stack Overflow",
      url: "https://stackoverflow.com/questions/tagged/create-react-appd",
    },
    {
      label: "GitHub Discussions",
      url: "https://github.com/facebook/create-react-app/discussions",
    },
    { label: "Twitter", url: "https://twitter.com/reactjs" },
    {
      label: "Contributor Covenant",
      url: "https://www.contributor-covenant.org/version/1/4/code-of-conduct/",
    },
  ];

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/facebook/create-react-app" },
  ];

  const logoSrc = {
    light: "/img/oss_logo_light.png",
    dark: "/img/oss_logo_dark.png",
  };

  const copyrightText = "Copyright © 2022 Facebook, Inc.";

  const featureList = [
    {
      title: "Less to Learn",
      description:
        "You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.",
    },
    {
      title: "Only One Dependency",
      description:
        "Your app only needs one build dependency. We test Create React App to make sure that all of its underlying pieces work together seamlessly – no complicated version mismatches.",
    },
    {
      title: "No Lock-In",
      description:
        "Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app. If you ever want an advanced configuration, you can ”eject” from Create React App and edit their config files directly.",
    },
    {
      title: "Effortless Setup",
      description:
        "Skip the learning curve with Create React App. No need to grapple with multiple build tools - just dive into coding. Enjoy seamless development with instant reloads, and when the time comes to deploy, trust that your bundles are finely tuned for optimal efficiency.",
    },
    {
      title: "Streamlined Development",
      description:
        "Free yourself from the complexities of configuring various build tools. Create React App streamlines your development process, letting you concentrate on coding. Instant reloads keep your workflow smooth, and when youre ready to deploy, your bundles are automatically fine-tuned for peak performance.",
    },
    {
      title: "Simplified Development",
      description:
        "Say goodbye to the hassle of mastering numerous build tools. With instant reloads, your focus stays on coding, not configuration. When its deployment time, rest assured that your bundles are automatically optimized for peak performance.",
    },
  ];

  return (
    <BrowserRouter>
      <div className={isDarkMode ? "dark-mode" : ""}>
        {/* Banner component with dark mode state and toggle function */}
        <Banner
          supportLink=""
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Other components */}
        <CreateReact
          logoSrc="https://cdn.discordapp.com/attachments/852798717936402472/1202595233100075008/logo.png?ex=65ce0716&is=65bb9216&hm=7de3a1dd8ed2e05c5619ccec064dc330baf102d69e020fe54d5b1f054e23c445&"
          title="Create React App"
          subtitle="Set up a modern web app by running one command."
          getStartedLink=""
          isDarkMode={isDarkMode} // Pass down dark mode state
        />
        <Features featureList={featureList} />

        {/* GettingStarted component with dark mode state */}
        <GettingStarted isDarkMode={isDarkMode} />

        {/* EasyToMaintain component with dark mode state */}
        <EasyToMaintain isDarkMode={isDarkMode} />

        <Footer
          docLinks={docLinks}
          communityLinks={communityLinks}
          socialLinks={socialLinks}
          logoSrc={logoSrc}
          copyrightText={copyrightText}
          isDarkMode={isDarkMode} // Pass down dark mode state
        />

        {/* Routes for your components */}
        <Routes>
          <Route
            path="/banner"
            element={
              <Banner
                supportLink=""
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            path="/createreact"
            element={
              <CreateReact
                logoSrc="https://cdn.discordapp.com/attachments/852798717936402472/1202595233100075008/logo.png?ex=65ce0716&is=65bb9216&hm=7de3a1dd8ed2e05c5619ccec064dc330baf102d69e020fe54d5b1f054e23c445&"
                title="Create React App"
                subtitle="Set up a modern web app by running one command."
                getStartedLink="/docs/getting-started"
                isDarkMode={isDarkMode} // Pass down dark mode state
              />
            }
          />
          {/* Routes for other components */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
