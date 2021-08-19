export default function setUserAge (birth_date) {
    const get_day = new Date().getDate();
    const get_month = (new Date().getMonth()) + 1;
    const get_year = new Date().getFullYear();

    const user_date = birth_date.split("/");
    const user_day = parseInt(user_date[0]);
    const user_month = parseInt(user_date[1]);
    const user_year = parseInt(user_date[2]);

    let idade = 0;
    if (get_month > user_month) {
        idade = (get_year - user_year)
    }
    if (get_month == user_month) {
        if (get_day > user_day) {
            idade = (get_year - user_year)
        } else {
            idade = (get_year - user_year) -1
        }
    }
    if (get_month < user_month) {
        idade = (get_year - user_year) -1
    }

    return idade;
}