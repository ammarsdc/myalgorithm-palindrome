function isPalindrome(text) {
    for(i = 0; i < text.length / 2; i++) {
        if (text.charAt(i) !== text.charAt(text.length - 1 - i)) {
            return false;
        }
    }
    return true;
}