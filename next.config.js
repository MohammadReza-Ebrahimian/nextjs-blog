const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Nextjs",
        mongodb_password: "molak",
        mongodb_clustorname: "cluster0",
      },
    };
  }


  return {
    env: {
      mongodb_username: "Nextjs",
      mongodb_password: "molak",
      mongodb_clustorname: "cluster0",
    },
  };
};
