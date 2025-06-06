window.watsonAssistantChatOptions = {
    integrationID: "835951f9-4aee-4a01-96fe-6c1783dbc035", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "31a82433-b777-4444-99ef-94edc108c58a", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });