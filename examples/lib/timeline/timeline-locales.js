if (typeof links === 'undefined') {
    links = {};
    links.locales = {};
} else if (typeof links.locales === 'undefined') {
    links.locales = {};
}

// English ===================================================
links.locales['en'] = {
    'MONTHS': new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
    'MONTHS_SHORT': new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"),
    'DAYS': new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
    'DAYS_SHORT': new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"),
    'ZOOM_IN': "Zoom in",
    'ZOOM_OUT': "Zoom out",
    'MOVE_LEFT': "Move left",
    'MOVE_RIGHT': "Move right",
    'NEW': "New",
    'CREATE_NEW_EVENT': "Create new event"
};

links.locales['en_US'] = links.locales['en'];
links.locales['en_UK'] = links.locales['en'];

// Catalan ===================================================
links.locales['ca'] = {
    'MONTHS': new Array("Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Setembre", "Octubre", "Novembre", "Desembre"),
    'MONTHS_SHORT': new Array("Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"),
    'DAYS': new Array("Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"),
    'DAYS_SHORT': new Array("Dm.", "Dl.", "Dm.", "Dc.", "Dj.", "Dv.", "Ds."),
    'ZOOM_IN': "Augmentar zoom",
    'ZOOM_OUT': "Disminuir zoom",
    'MOVE_LEFT': "Moure esquerra",
    'MOVE_RIGHT': "Moure dreta",
    'NEW': "Nou",
    'CREATE_NEW_EVENT': "Crear nou event"
};
links.locales['ca-ES'] = links.locales['ca'];

// German ===================================================
links.locales['de'] = {
    'MONTHS': new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"),
    'MONTHS_SHORT': new Array("Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"),
    'DAYS': new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"),
    'DAYS_SHORT': new Array("Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"),
    'ZOOM_IN': "Vergrößern",
    'ZOOM_OUT': "Verkleinern",
    'MOVE_LEFT': "Nach links verschieben",
    'MOVE_RIGHT': "Nach rechts verschieben",
    'NEW': "Neu",
    'CREATE_NEW_EVENT': "Neues Ereignis erzeugen"
};

links.locales['de_DE'] = links.locales['de'];
links.locales['de_CH'] = links.locales['de'];

// Danish ===================================================
links.locales['da'] = {
    'MONTHS': new Array("januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"),
    'MONTHS_SHORT': new Array("jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"),
    'DAYS': new Array("søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"),
    'DAYS_SHORT': new Array("søn", "man", "tir", "ons", "tor", "fre", "lør"),
    'ZOOM_IN': "Zoom in",
    'ZOOM_OUT': "Zoom out",
    'MOVE_LEFT': "Move left",
    'MOVE_RIGHT': "Move right",
    'NEW': "New",
    'CREATE_NEW_EVENT': "Create new event"
};
links.locales['da_DK'] = links.locales['da'];

// Russian ===================================================
links.locales['ru'] = {
    'MONTHS': new Array("Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"),
    'MONTHS_SHORT': new Array("Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"),
    'DAYS': new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"),
    'DAYS_SHORT': new Array("Вос", "Пон", "Втo", "Срe", "Чет", "Пят", "Суб"),
    'ZOOM_IN': "Увeличить",
    'ZOOM_OUT': "Умeньшить",
    'MOVE_LEFT': "Сдвинуть налeво",
    'MOVE_RIGHT': "Сдвинуть направо",
    'NEW': "Новый",
    'CREATE_NEW_EVENT': "Создать новоe событиe"
};
links.locales['ru_RU'] = links.locales['ru'];

// Spanish ===================================================
links.locales['es'] = {
    'MONTHS': new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"),
    'MONTHS_SHORT': new Array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"),
    'DAYS': new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"),
    'DAYS_SHORT': new Array("Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"),
    'ZOOM_IN': "Aumentar zoom",
    'ZOOM_OUT': "Disminuir zoom",
    'MOVE_LEFT': "Mover izquierda",
    'MOVE_RIGHT': "Mover derecha",
    'NEW': "Nuevo",
    'CREATE_NEW_EVENT': "Crear nuevo evento"
};

links.locales['es_ES'] = links.locales['es'];
