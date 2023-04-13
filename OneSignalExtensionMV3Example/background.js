OneSignal_MV3.init({appId: "f4056a9a-f761-416e-aee9-98bbf24eab88",
                googleProjectNumber: "1019552524004"});

OneSignal_MV3.addListenerForNotificationOpened(function(data) {
    console.log("NotificationOpened:data:", data);
});
OneSignal_MV3.getIdsAvailable(function(ids) {
    console.log("Backgrond page:getIdsAvailable:ids:", ids);
});

// Example showing how to prevent displaying a notification based on the payload contents
OneSignal_MV3.addWillProcessMessageReceived(async function(payload) {
    console.log("addWillProcessMessageReceived:", payload);

    const customData = JSON.parse(payload.data.custom);
    if (customData.a) {
        // additionalData here is the custom has set on the OneSignal_MV3 dashboard or REST API via the "data" field
        const additionalData = customData.a;
        // is_silent is just an example key, this can be any key or value you define in your additional data.
        if (additionalData.is_silent === "1") {
            console.log("Payload has is_silent, preventing notification from displaying");
            return true;
        }
    }

    // returning false prevents the notifiation from displaying.
    return false;
});
