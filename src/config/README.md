## RU
Я считаю данную папку самой недооценённой и часто-пренебрегаемой, но очень важной.
Здесь нужно хранить константы, по сути описывающие ваше приложение. Избегайте hard-code-а.

**Важно 1:** все константы должны быть названы в UPPERCASE_UNDERSCORE.

**Важно 2:** все значание в константах, должны быть immutable, поэтому если у вас есть
объект или массив данных, который предоставляет из себя костанту (массив допустимых типов чего-то например),
то обязательно используйте *Object.freeze()*.

## EN
I consider this directory to be the most underrated and often-neglected, but very important.
You should store constants here, which describe your application. Avoid hard-coding.

**Important rule 1:** all the constants must be named at UPPERCASE_UNDERSCORE style.

**Important rule 2:** all the values which constants hold, must be immutable. If you have object or
an array which should be constant (ex: array of available types), use *Object.freeze()*.