module.exports = {
    /**
     Shuffler
     http://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
     **/
    encrypt_msg: function (msg) {
        var shuffledWord = '';
        var charIndex = 0;
        msg = msg.split('');
        while (msg.length > 0) {
            charIndex = msg.length * Math.random() << 0;
            shuffledWord += msg[charIndex];
            msg.splice(charIndex, 1);
        }
        return shuffledWord;
    }
};