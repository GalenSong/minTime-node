// "use strict";
// const nodemailer = require("nodemailer");

// async function emailService() {
//     let testAccount = await nodemailer.createTestAccount();

//     let transporter = nodemailer.createTransport({
//         service: 'smtp.aliyun.com',
//         host: "smtp.aliyun.com",
//         secureConnection: true,
//         port:465,
//         auth: {
//             user: "mintime_support@aliyun.com",
//             pass: "cc08erv5~"
//         }
//     });

//     let info = await transporter.sendMail({
//         from: '"mintime_support " <mintime_support@aliyun.com>',
//         to: "young_GalenSong@163.com",
//         subject: "请核对信息",
//         text: "工单信息请核对一下"
//     });

//     console.log("Message sent: %s", info.messageId);

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// }
// module.exports = emailService;