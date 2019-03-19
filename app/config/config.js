var Config = {

    INFO: {
      NAME: process.env.INFO_NAME || "Applique",
      DOMAIN: process.env.INFO_DOMAIN || "applique",
      HOST: process.env.INFO_HOST || "applique.com.br",
      PORT: process.env.INFO_PORT || "8080",
      PORT_REV_PROXY: process.env.INFO_PORT_REV_PROXY || "80",
      EMAIL_NO_REPLY: process.env.EMAIL_NO_REPLY || "no-reply@applique.com.br",
      EMAIL_CONTACT: process.env.EMAIL_CONTACT || "contato@applique.com.br"
    },
  
    NODE_MAILER: {
      SERVICE: process.env.NODE_MAILER_SERVICE || "",
      PORT: process.env.NODE_MAILER_PORT || 587,
      AUTH: {
        USER: process.env.NODE_MAILER_AUTH_USER || "",
        PASS: process.env.NODE_MAILER_AUTH_PASS || ""
      }
    }
  };
  
  /**
   * Expose
   */
  
  module.exports = Config;
  
  