## RU
В данной папке, я храню вспомогательные функции, которые мне могут полезны в разных частях проекта.

**Очень важное правило:** так как я видел не один проект, где utils превращался в кромешный ад, иногда с 2000 строк кода
на файл, то я даю настоятельную рекомендацию. **1 функция - 1 файл, named exports запрещены**. Данное правило, сделает 
ваши utils testable, будет подходить под open-closed principle.

**Очень важное правило 2:** utils должны быть pure-functions, они не должны знать ничего о деталях вашего фреймворка-стека,
дабы их можно было спокойно перенести, скажем, с Vue на React.

## EN
At this folder, I usually store helper-functions, which are useful at different parts of application.

**Very important rule:** considering I've witnessed a lot of projects where utils were total mess, sometimes even with
2000-lines files, so I give pretty strong recommendation. **1 function - 1 file, named exports permitted**. This rule will
make your utils testable and avoid violating open-close principle.

**Very important rule 2:** utils must be pure-functions, they mustn't know anything about framework details.
It would allow us, to easily transit utils from Vue to React fro example.