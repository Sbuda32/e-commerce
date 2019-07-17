simpleCart({
    checkout: {
        type: "SendForm" ,
        url: "https://sandbox.payfast.co.za/eng/process" ,
        // HTTP method for form, "POST"
        method: "POST" ,
        // URL to redirect browser to after successful checkout
        success: "http://localhost:3000/" ,
        // URL to redirect browser to after checkout was cancelled by buyer
        cancel: "http://localhost:3000/" ,
        extra_data: {
            currency_code: "ZAR",
            merchant_id: "10013670",
            merchant_key: "ij8xlngahgk6p",
            notify_url: "http://localhost:3000/", //this is the ITN or callback URL
            amount: simpleCart.total, // Total amount = item1 + item2 + item3 etc
            name_first: "Buyer first name",
            name_last: "Buyer last name",
        }
    },
    beforeCheckout: function( data ){
        data.currency = "ZAR";
        data.cancel_url = data.cancel_return;
        data.return_url = data.return;
        var payfast_description = '';
        for (var key in data)
            if (key.match(/^item_name/))
                payfast_description += ' ' +data[key];
        data.item_description = data.item_name = payfast_description;
    }
});