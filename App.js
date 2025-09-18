
    let simpleMode = false;
    const synth = window.speechSynthesis;

    function hideAll() {
      document.querySelectorAll("#screen > div").forEach(div => div.style.display = "none");
    }
    
    function speak(text) {
        if (!synth) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-IN';
        synth.speak(utterance);
    }
    
    function showScreen(id, titleText) {
        hideAll();
        document.getElementById(id).style.display = "block";
        document.querySelector('.app-title').innerText = titleText;
    }
    
    function openNav() {
        document.getElementById("sidebar").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("sidebar").style.width = "0";
    }

    function showHome() { 
        showScreen('home', 'Krushi App'); 
        document.getElementById('scanner').style.display = 'none';
        closeNav();
    }
    function showLogin() { showScreen('login', 'Login'); closeNav(); }
    function showFarmer() { showScreen('farmer', 'Farmer Dashboard'); closeNav(); }
    function showDoctor() { showScreen('doctor', 'Doctor Dashboard'); closeNav(); }
    function showCommunity() { showScreen('community', 'Community'); closeNav(); }
    function showCropGuides() { showScreen('cropGuides', 'Crop Guides'); closeNav(); }
    function showMarketplace() { showScreen('marketplace', 'Marketplace'); closeNav(); }
    function showAgriNews() { showScreen('agriNews', 'Agri-News'); closeNav(); }

    function showSimpleMode() { 
        simpleMode = true;
        showScreen('simpleMode', 'Simple Mode');
        closeNav();
        speak("Welcome, I am your guide. What would you like to do?");
    }
    
    function showScanner() {
        hideAll();
        document.getElementById('scanner').style.display = 'flex';
        document.querySelector('.app-title').innerText = 'Crop Scanner';
        closeNav();
    }

    function simulateScan() {
      
        const shutterBtn = document.querySelector('.shutter-btn');
        shutterBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="color:var(--primary-green);"></i>';
        
        if (simpleMode) {
            speak("Scanning complete. Analyzing the image. This might take a few seconds.");
        }

        setTimeout(() => {
        
            document.getElementById('scanner').style.display = 'none';
            showScreen('scanResult', 'Scan Results');
            if (simpleMode) {
                speak("Scan results are ready. We have identified a disease. Would you like to know more about it, or connect with a doctor?");
            }
        }, 3000); // 3-second delay
    }

    // Initial load
    document.addEventListener('DOMContentLoaded', () => {
        showScreen('overview', 'Krushi App');
    });


