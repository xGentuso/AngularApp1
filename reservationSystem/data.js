// src/app/data/data.js

module.exports = function () {
    return {
        conservationAreas: [
            { 
                id: 1, 
                name: "Niagara Glen Nature Reserve", 
                timeSlots: [
                    { slot: "9:00am - 12:00pm", available: true, price: 25 },
                    { slot: "12:00pm - 3:00pm", available: true, price: 25 },
                    { slot: "3:00pm - 6:00pm", available: true, price: 25 },
                ]
            },
            { 
                id: 2, 
                name: "Rattlesnake Point Conservation Area", 
                timeSlots: [
                    { slot: "9:00am - 12:00pm", available: true, price: 20 },
                    { slot: "12:00pm - 3:00pm", available: true, price: 20 },
                    { slot: "3:00pm - 6:00pm", available: true, price: 20 },
                ]
            },
            { 
                id: 3, 
                name: "Ball's Falls Conservation Area", 
                timeSlots: [
                    { slot: "9:00am - 12:00pm", available: true, price: 18 },
                    { slot: "12:00pm - 3:00pm", available: true, price: 18 },
                    { slot: "3:00pm - 6:00pm", available: true, price: 18 },
                ]
            },
            { 
                id: 4, 
                name: "Laura Secord Homestead Conservation Area", 
                timeSlots: [
                    { slot: "9:00am - 12:00pm", available: true, price: 22 },
                    { slot: "12:00pm - 3:00pm", available: true, price: 22 },
                    { slot: "3:00pm - 6:00pm", available: true, price: 22 },
                ]
            }
        ],
        reservations: []
    }
}
