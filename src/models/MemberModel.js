import mongoose from 'mongoose'

const schema = mongoose.Schema({

    member_no: {
        type: String,
        required: true,
        unique: true
    },
    member_name: {
        type: String,
        required: true,
        default: null
    },
    member_bdate: {
        type: Date,
        required: true,
        default: null
    },
    member_gender: {
        type: String,
        enum: ['Male', 'Female'],
        default: 'Male'
    },
    member_email: {
        type: String,
        required: true,
        unique: true,
    },
    member_password: {
        type: String,
        required: true
    },
    member_deposit_doi: {
        type: Number,
        default: 0
    },
    member_deposit_mp: {
        type: Number,
        default: 0
    },
    member_deposit_refferal: {
        type: Number,
        default: 0
    },
    member_deposit_koperasi: {
        type: Number,
        default: 0
    },
    member_phone: {
        type: String,
        required: true
    },
    member_address: {
        address: {
            type: String,
            default: null
        },
        subdistrict_id: {
            type: String,
            default: null
        },
        subdistrict: {
            type: String,
            default: null
        },
        city_id: {
            type: String,
            default: null
        },
        city: {
            type: String,
            default: null
        },
        province_id: {
            type: String,
            default: null
        },
        province: {
            type: String,
            default: null
        },
        postcode: {
            type: String,
            default: null
        }
    },
    bank: [{
        account_name: {
            type: String,
            default: null
        },
        account_number: {
            type: String,
            default: null
        },
        account_bank_name: {
            type: String,
            default: null
        },
    }],
    member_npwp: {
        type: String,
        default: null
    },
    member_ktp: {
        type: String,
        default: null
    },
    member_bpjs_kes: {
        type: String,
        default: null
    },
    member_bpjs_tk: {
        type: String,
        default: null
    },
    member_passport: {
        type: String,
        default: null
    },
    member_photo: {
        type: String,
        default: null
    },
    member_point: {
        type: Number,
        default: 0
    },
    member_saldo: {
        type: Number,
        default: 0
    },
    member_hotel_point: {
        type: Number,
        default: 0
    },
    member_imei: {
        type: String,
        default: null
    },
    store_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stores',
        default: null,
    },
    storeRentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'store_rent',
    },
    agent_code: {
        type: String,
        default: null
    },
    mkt_status: {
        type: Boolean,
        default: false
    },
    edc: {
        type: Boolean,
        default: false
    },
    is_koperasi: {
        type: Boolean,
        default: false
    },
    member_status: {
        type: Boolean,
        default: true
    },
    member_token: {
        type: String,
        default: null
    },
    reg_latitude: {
        type: String,
        default: '0'
    },
    reg_longitude: {
        type: String,
        default: '0'
    },
    reg_address: {
        type: String,
        default: null
    },
}, { timestamps: true })

export default mongoose.model('member', schema)