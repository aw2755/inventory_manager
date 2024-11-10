module.export = {
    apps: [
        {
            name: "inventory-manager",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
                ENV_VAR1: "enviornment-variable",
            },
        },
    ],
};