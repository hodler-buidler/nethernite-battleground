## RU
В данный момент, я имею определённую точку зрения, относительно локализации монолитных Vue-приложений,
я не говорю, что данный подход идеален, но мне он нравится, т.к упрощает жизнь разработчикам и не создаёт
больших препядствий для коммуникации с переводчиками.

Использую подход SFC + translation-файлы. В SFC переводах, я помещаю переводы для конкретного компонента,
это увеличивает скорость создания ключа с переводом, облегачает создание наименования, заботы о том, где его
поместить.

Однако, существуют строки, которые используются очень часто в приложении. Яркий пример - валидационные ошибки.
Сообщение, что поле X обязательно, будет всегда одинаково и очень часто использоваться. В таком случае, дабы
сильно не нарушать DRY и обеспечить консистентность системных сообщений, я использую translation файлы.

Важной, договорённостью, является наименование ключей нулевого уровня translation-файлов, в UPPERCASE_UNDERSCORE
стиле, дабы избежать возможных конфликтов с SFC ключами, которые я предпочитаю называть в kebab-case.

Так же, внутри translation-файлах, рекомендую писать строки с маленькой буквы, и потом использовать фильтры.
Единственное, это правило допустимо нарушить, когда весь сет сообщений будет всегда с большой  буквы. Оставляйте
коммент в таких файлах в начале.

Внутри же SFC компонентов, вы можете добавлять строки, согласно тому, что вам нужно  в дизайне, т.к reuse
ключей внутри SFC не такое частое дело. Но всегда помните о фильтрах - это швейцарский нож.

## EN

At this moment, I'm having the particular opinion about localising monolite Vue-applications. I don't
state that my approach is ideal but I just like it because it simplifies life for developers and doesn't
create noticible obstacles in communication with translators.

I use SFC translations + translation-files. At SFC translations, I put component-specific translations.
This increases key creation speed and simplifies naming and placing concerns.

However, there are some translations which are heavily used all across aplication. The brightest example is
validation errors. The message that field X is required will be always the same and will be often used. In This
case, to avoid strong violation of DRY principle and ensure consistency at system messages, I prefer translation files.

An important agreement here is to follow UPPERCASE_UNDERSCORE naming for zero-level translation keys to avoid
possible conflicts with SFC keys. In addition I prefer to name SFC keys in kebab-case.

Inside translation files, I suggest to start strings with lower-case and avoid any formatting-details.
Formatting is usually filters responsibility. However, you can violate this recommendation if you have the set of
messages which will always have the same formatting. Leave comments at the beginning of such files.

Inside SFC components, it's allowed to use formatted strings according to design. This is because strings reuse
inside particular component is not that often. Keep in mind the fact that you always have filters, this is your
swiss-knife for formatting.