const config = {
    style: {
        modules: {
            localIdentName:
                process.env.NODE_ENV === "production"
                    ? "__hh_[hash:base64:10]"
                    : "__hh_[name]_[local]_[hash:base64:10]",
        },
    },
}; // just overriding localidentname

module.exports = config;
