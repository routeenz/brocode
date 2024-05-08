import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
  isOwner: boolean;
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <body>
        <header>
            <h1>Welcome to <span>BRO CODE</span></h1>
            <p>Where Every Code Matters</p>
        </header>
    
        <section class="welcome-message">
            <div class="container">
                <h2>Welcome Message</h2>
                <p>Welcome to BRO CODE, your ultimate destination for web development tools and resources.
                Whether you're here to explore our coding playground, connect with fellow developers,
                or enhance your skills, we're thrilled to have you with us.</p>
                <button id="explore-btn">Explore Now</button>
            </div>
        </section>
    
        <footer>
            <p>&copy; 2024 WebDevCompiler. All rights reserved.</p>
        </footer>
    
        <script src="script.js"></script>
    </body>
    </html>    
           
    `,
    css: `
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
  }
  
  header {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
  }
  
  header h1 {
      margin: 0;
  }
  
  header span {
      color: #ffffff;
  }
  
  .welcome-message {
      background-color: #f2f2f2;
      padding: 50px 20px;
      text-align: center;
  }
  
  .container {
      max-width: 800px;
      margin: 0 auto;
  }
  
  button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
  }
  
  button:hover {
      background-color: #0056b3; /* Darker shade of brand color */
  }
  
  footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 20px;
      position: fixed;
      bottom: 0;
      width: 100%;
  }
  
    `,
    javascript: `
    document.getElementById('explore-btn').addEventListener('click', function() {
     
      alert('Explore button clicked!');
  });
  
    `,
  },
  currentLanguage: "html",
  isOwner: false,
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateIsOwner: (state, action: PayloadAction<boolean>) => {
      state.isOwner = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<CompilerSliceStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const {
  updateCurrentLanguage,
  updateCodeValue,
  updateFullCode,
  updateIsOwner,
} = compilerSlice.actions;
