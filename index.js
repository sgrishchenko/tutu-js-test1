"use strict";
console.clear();

(w => {
    function dscount(str, ...rest) {
        //чтобы операции проводились без учета регистра, перевожу входную строку в нижний регистр
        return str.toLowerCase()
                //разделяю входную строку по сформированной в будущем строке
                .split(
                    //конкатенирую входные параметры и тоже перевожу в нижний регистр
                    rest.join("").toLowerCase()
                )
                //так как я разделял строку, выходной массив будет иметь длину на единицу больше чем количество разделителей
                .length - 1
    }


    // Для удобства можно использовать эти тесты:
    try {
        test(dscount, ['ab___ab__', 'a', 'b'], 2);
        test(dscount, ['___cd____', 'c', 'd'], 1);
        test(dscount, ['de_______', 'd', 'e'], 1);
        test(dscount, ['12_12__12', '1', '2'], 3);
        test(dscount, ['_ba______', 'a', 'b'], 0);
        test(dscount, ['_a__b____', 'a', 'b'], 0);
        test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);

        console.info("Congratulations! All tests success passed.");
    } catch (e) {
        console.error(e);
    }

    // Простая функция тестирования
    function test(call, args, count, n) {
        let r = (call.apply(n, args) === count);
        console.assert(r, `Finded items count: ${count}`);
        if (!r) throw "Test failed!";
    }

    return '--- End ---';
})(window);