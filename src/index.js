module.exports = function toReadable(number) {
    let last_num = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let middle_num = {
        0: "",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let first_num = {
        1: "one hundred",
        2: "two hundred",
        3: "three hundred",
        4: "four hundred",
        5: "five hundred",
        6: "six hundred",
        7: "seven hundred",
        8: "eight hundred",
        9: "nine hundred",
    };
    let exept = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let array = number.toString().split("");
    console.log(array);
    let result = "";
    if (number == 0) {
        return "zero";
    }
    if (array.length == 1) {
        return result + last_num[array[0]];
    }
    if (array.length == 2) {
        if (array[0] == "1") {
            return (result + exept[array[0] + array[1]]).trim();
        }
        return (
            result +
            middle_num[array[0]] +
            " " +
            last_num[array[1]]
        ).trim();
    }
    if (array.length > 2) {
        if (array[1] == "1") {
            result += first_num[array[0]];
            result += " ";
            result += exept[array[1] + array[2]];
        } else {
            if (array[1] == "0") {
                return (
                    result +
                    first_num[array[0]] +
                    " " +
                    last_num[array[2]]
                ).trim();
            }
            if (array[2] == "0") {
                return (
                    result +
                    first_num[array[0]] +
                    " " +
                    middle_num[array[1]]
                ).trim();
            }
            result += first_num[array[0]];
            result += " ";
            result += middle_num[array[1]];
            result += " ";
            result += last_num[array[2]];
        }
    }
    return result.trim();
};
