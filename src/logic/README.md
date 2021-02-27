## RU
Технически, функциональность данного директории, могла бы быть отнесена к utils, однако, я предпочитаю
обособлять функции, которые храню в этой папке особым образом.

Здесь хранится бизнес-логика. Это подчёркивает жирным, что тут не должно быть никаких деталей фреймворка,
это чистый JS код, хранящий реализации.

Иногда, разница между logic и utils, может быть не очевидной. Однако, сюда, я предпочитаю класть
функции, которые наиболее сильно отображают поведение, логику домена.

Допускаю named-exports тут.

## EN
Technically, the functionality of this directory could be inside utils. However, I prefer separate
the functionality I usually store here.

This is the place for BUSINESS logic. It underlines the fact, that there are no place place for
framework-specific details. This is pure JS, containing logic implementations.

Sometimes, difference between logic and utils is not obvious However, I prefer put here files,
which I consider to reflect domains' logic and behavior most.