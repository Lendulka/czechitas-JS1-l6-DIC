# Lekce 06
# Cvičení: Vlastní funkce

<strong>Úkol č. 3: Kontrola DIČ</strong>

Všimněte si, že knihovna validator.js v době vzniku tohoto zadání neumí ověřit platnost českého DIČ (daňové identifikační číslo). Zkusme tedy takovou funkci napsat.

Formát DIČ sestává z předpony CZ a poté následuje devět nebo deset číslic. Tedy například:

CZ123456789
CZ1234567890

Postupujte dle následujících kroků:

Vytvořte prázdnou stránku s JavaScriptem a knihovnou validator.js.
Vytvořte funkci isDIC s jedním parametrem inputStr, což bude řetězec, který chceme zkontrolovat.
Jako první ve funkci zkontrolujte, jestli je vstupní řetězce kratší než 11 znaků. V takovém případě nemá smysl dál nic dělat, protože vstup evidentně není DIČ. Vraťte tady z funkce false. Tím naše funkce končí. Všimněte si, že takto používáme vzor časný návrat.
Dále ve funkci zkontrolujte, jestli je vstupní řetězce delší než 12 znaků. V takovém případě opět vraťte false.
Dále si ve funkce do proměnné prefix uložte první dva znaky vstupního řetězce.
Pomocí podmínky zkontrolujte, že proměnná prefix obsahuje přesně znaky CZ. Pokud ne, ihned vraťte false.
Do promměné digits si uložte část vstupního řetězce od třetího znaku dále.
Použijte metodu validator.isInt, která umí zkontrolovat, zda řetězec obsahuje pouze číslice. Pokud metoda vrátí false, ihned také vraťte false.
Pokud funkce dospěla až do tohoto bodu, vstup prošel všemi testy. Můžeme vrátit true.
VyzKoušejte svoji funkci v konzoli na různých vstupech a ověřte, že funguje. Nezapomeňte ověřit platná i neplatná DIČ.

<strong>Used methods:</strong>
SelectedIndex Property, String.slice(), Events change and submit, validator.isInt()

