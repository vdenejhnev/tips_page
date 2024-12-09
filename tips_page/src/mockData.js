export const mockEmployeeCard = {

    user: {
        avatar: "Photo.png",
        name: "Иван Иванов",
        job: "Разработчик",
        dream: "Отдохнуть на Бали",
        amountSaved: 50000,
        amountGoal: 200000,
    },
    options: {
        availableAmounts: [50, 150, 300, 1000],
        gifts: [
            { value: 1500, text: "Букет цветов" },
            { value: 300, text: "Сладкий подарок" },
            { value: 1000, text: "Такси до дома" },
            { value: 10000, text: "Вкусный ужин" },
        ],
        merits: [
            { name: "Вежливость", icon: "merit1.svg" },
            { name: "Скорость", icon: "merit2.svg" },
            { name: "Решил вопрос", icon: "merit3.svg" },
            { name: "Связь", icon: "merit4.svg" },
        ],
    },
    hidden: ['addition']
};