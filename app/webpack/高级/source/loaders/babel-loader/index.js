const schema = require('./schema.json');
const babel = require('@babel/core');
module.exports = function(content){
    const options = this.getOptions(schema);
    const callback = this.async();
    // 使用babel
    babel.transform(content, options, (err, result) => {
        if(err) callback(err);
        else callback(null, result.code);
    
    })
}