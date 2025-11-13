// js/main.js

/**
 * Global object for handling application initialization and logic.
 * This function handles TV remote key events, which is essential for Tizen apps.
 */
var main = {
    isToggled: false,
    statusElement: null,

    /**
     * Initializes the module. Called from the body's onload event.
     */
    init: function() {
        console.log("TizenBrew Hello World Module Initialized.");
        this.statusElement = document.getElementById('status');
        
        // Add listener for all keyboard/remote inputs
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    },

    /**
     * Handles key down events from the TV remote.
     * @param {KeyboardEvent} event The key event object.
     */
    handleKeyDown: function(event) {
        var keyCode = event.keyCode;

        switch (keyCode) {
            case 13: // Enter Key (Standard Tizen Key Code)
                this.toggleMessage();
                break;
            case 10009: // Return/Back Key (Standard Tizen Key Code)
                console.log("Return key pressed. TizenBrew will handle exiting/going back.");
                // TizenBrew usually manages the app lifecycle, but you can add custom clean-up here.
                break;
            default:
                console.log("Key pressed, code: " + keyCode);
                break;
        }
    },
    
    /**
     * Toggles the displayed message on the screen.
     */
    toggleMessage: function() {
        this.isToggled = !this.isToggled;
        if (this.isToggled) {
            this.statusElement.textContent = "Key pressed! Welcome to module development.";
            this.statusElement.style.borderColor = "#2ecc71";
            this.statusElement.style.color = "#2ecc71";
        } else {
            this.statusElement.textContent = "Press ENTER on your TV remote.";
            this.statusElement.style.borderColor = "#3498db";
            this.statusElement.style.color = "#3498db";
        }
    }
};
