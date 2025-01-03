
// ** WHY THIS MATTERS ** //

// Sequential requests (using await for each fetch):-> 
// Makes sense when one request depends on the result of another, for example, 
// fetching a user’s profile, then using that profile to fetch user-specific data.

// Concurrent requests (using Promise.all()):-> 
// Is best for independent requests, like fetching weather, stock data, and news, 
// where none of the results depend on each other.

// ** HOW IT AFFECTS THE WORK FLOW ** //

// When you use await inside each fetch:-> 
// JavaScript blocks the execution of the subsequent code until the current request is fully resolved. 
// This results in sequential execution, making it slower.

// When you use Promise.all():-> 
// JavaScript doesn’t wait for the previous request to resolve before starting the next one. 
// This results in concurrent execution, which is more efficient for independent tasks.

//++++++++++ PRACTICE QUESITONS ++++++++++\\

//Q1. Fetching User Data from an API:

// Scenario: Imagine you're building a social media profile page, 
// and you need to fetch user data from an API. You want to retrieve the user's profile, 
// followed by their posts, and display them together.

// Task:
// Use async/await to fetch user profile data from an API.
// After fetching the user data, fetch their posts from another endpoint.
// Combine and display both the user profile and posts.

// async function getUserAndRepos(username){
//     try {
//         const userId = await fetch(`https://api.github.com/users/${username}`);
//         const userIdResponse = await userId.json();

//         const userRepos = await fetch(`https://api.github.com/users/${username}/repos`);
//         const userReposResponse = await userRepos.json();

//         console.log("user Id: ", userIdResponse);
//         console.log("user Repos: ", userReposResponse);
    
        
//     } catch (error) {
//         console.log("Error fetching data from Github: ", error);
        
//     }
// }
// getUserAndRepos("hiteshchoudhary");


// Q2. Simulating File Downloads:

// Scenario: You're building a file download manager. 
// Files can take different amounts of time to download based on their size. 
// You need to simulate downloading two files and print the result 
// once both downloads are complete.

// Task:
// Create two asynchronous functions using async/await to simulate file downloads using setTimeout.
// Print "Download complete" after both files have been downloaded.

// async function downloadFile(file, time){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`${file} downloaded.`);
//         },time)
//     })
// }

// async function startDownloads(){
//     try {
//         const file1 = await downloadFile('file1.txt',2000);
//         console.log(file1);

//         const file2 = await downloadFile('file2.txt',5000);
//         console.log(file2);
        
//         console.log("Both files downloaded successfully!");
        
//     } catch (error) {
//         console.log("Downloading error: ", error);
        
//     }
// }
// startDownloads();

// Q3. Fetching Data from Multiple APIs Simultaneously:

// Scenario: You're building a dashboard that needs data from different services 
// (e.g., weather data, stock prices, and news). 
// You want to fetch this data concurrently to avoid delays.

// Task:
// Fetch data from three different APIs concurrently using async/await and Promise.all.
// Print the results of all three API calls once they are fetched

// async function getDashboardData(){
//     try {
//         const weather =  fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London');
//         const stocks =  fetch('https://api.stockapi.com/v1/latest.json?symbol=AAPL&apikey=YOUR_KEY');
//         const news =  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_KEY');

//         const[weatherData, stockData, newsData] = await Promise.all([weather, stocks, news]);

//         const weatherPromise = await weatherData.json();
//         const stockPromise = await stockData.json();
//         const newsPromise = await newsData.json();

//         console.log(weatherPromise);
//         console.log(stockPromise);
//         console.log(newsPromise);
        

//     } catch (error) {
//         console.log("Error fetching dashboard data: ", error);
        
//     }
// }
// getDashboardData();

// Q4. Retrying Failed API Requests
// Scenario: You're developing a service that fetches live cryptocurrency prices. Sometimes, 
// the API request might fail due to network issues. You need to retry the request up to 3 times if it fails.

// Task:
// Create an async function that fetches data from an API.
// If the request fails, retry up to 3 times before giving up and printing an error.

// async function fetchWithRetry(username, retries = 3){
//     let i;
//     for (i = 0; i < retries; i++) {
//         try {
//             const response = await fetch(`https://api.github.com/users/${username}`);
//             if(!response.ok) {
//                 throw new Error("Request Failed!");
//             }
//             const data = response.json();
//             console.log("Data Fetched Succesfully!");
//             return data;
//         } catch (error) {
//                 console.log(`Retrying... attempt ${i + 1}`);
 
//         }
        
//     }
//     console.log("Failed after 3 attempts");
    
// }
// fetchWithRetry('hiteshchoudhary');


// fetchWithRetry('hiteshchoudhary');
// async function fetchWithRetry(username, retries = 3){
//     let i;
//     for (i = 0; i < retries; i++) {
//         try {
//             const response = await fetch(`https://api.github.com/users/${username}`);
//             if(!response.ok) {
//                 throw new Error("Request Failed!");
//             }
//             const data = response.json();
//             console.log("Data Fetched Succesfully on attempt: ", i+1);
//             return data;
            

//         } catch (error) {
//             if (i>retries-1) {
//                 console.log(`Retrying... attempt ${i + 1}`);
//             } else {
//                 console.log("Failed after maximum retries:", error);
//             }
//         }
//     }
// }

// fetchWithRetry('hiteshchoudhary');

// Q5. Sequential Tasks with Dependencies:

// Scenario: You're building an online book store. A customer can place an order, and the system should:
// First, check if the book is in stock.
// Then, process the payment.
// Finally, confirm the order once the payment is successful.

// Task:
// Use async/await to simulate checking stock, processing payment, and confirming the order.
// Ensure that these tasks happen in the correct sequence.

async function checkStock(bookId) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Stock checked for book: ",bookId);
            resolve(true);
        },2000);
    })
}

async function processPayment(orderId) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Payment processed for order:", orderId);
            resolve("Payment Successful!");
        },3000);
    })
}

async function confirmOrder(orderId) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("order confirmed: ",orderId);
            resolve("order confirmation sent to customer");
        },1000);
    })
}

async function placeOrder(bookId, orderId) {
    try {
        const stockAvailable = await checkStock(bookId);

        if(stockAvailable){
            const paymentStatus = await processPayment(orderId);
            console.log(paymentStatus);

            const confirmation = await confirmOrder(orderId);
            console.log(confirmation);
            
        }
    } catch (error) {
        console.error("Error processing order:", error);
    }
}

placeOrder(123, 456);