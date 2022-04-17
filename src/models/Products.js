import { Schema, model } from 'mongoose';


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
}, { timestamps: true});


export const Product = model('Products', productSchema)