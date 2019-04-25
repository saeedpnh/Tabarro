function FormatNumberBy3(num, decpoint, sep) {
    if (arguments.length == 2) {
        sep = ",";
    }
    if (arguments.length == 1) {
        sep = ",";
        decpoint = ".";
    }
    num = num.toString();
    aa = "";
    for (i = 0; i < num.length; i++) {
        var check = num.charAt(i);
        if (check != sep)
            aa += check;
    }
    a = aa.split(decpoint);
    x = a[0];
    y = a[1];
    z = "";
    if (typeof (x) != "undefined") {
        for (i = x.length - 1; i >= 0; i--)
            z += x.charAt(i);
        z = z.replace(/(\d{3})/g, "$1" + sep);
        if (z.slice(-sep.length) == sep)
            z = z.slice(0, -sep.length);
        x = "";
        for (i = z.length - 1; i >= 0; i--)
            x += z.charAt(i);
        if (typeof (y) != "undefined" && y.length > 0)
            x += decpoint + y;
    }
    return x;
}

function seprateNumber(obj) {
    obj.value = FormatNumberBy3(obj.value, ".", ",");
}
(function () {
    $('.justNumber').on('keypress keyup blur paste', function (event) {
        var that = this;
        //paste event
        if (event.type === "paste") {
            setTimeout(function () {
                $(that).val($(that).val().replace(/[^\d].+/, ""));
            }, 100);
        } else {
            if (event.which < 48 || event.which > 57) {
                event.preventDefault();
            } else {
                $(this).val($(this).val().replace(/[^\d].+/, ""));
            }
        }
    });
    //profit of bank
    $('button.profit').on('click', function (e) {
        let deposit = $('input.deposit').val();
        let rate = $('input#formGroupRate').val();
        deposit = deposit.replace(/,/g, '');
        let daily = Math.round((deposit * rate * 1) / 36500);
        let monthly31 = Math.round((deposit * rate * 31) / 36500);
        let monthly30 = Math.round((deposit * rate * 30) / 36500);
        let yearly = Math.round((deposit * rate * 365) / 36500);
        //insert result
        document.getElementById('daily').innerHTML = daily.toLocaleString();
        document.getElementById('month31').innerHTML = monthly31.toLocaleString();
        document.getElementById('month30').innerHTML = monthly30.toLocaleString();
        document.getElementById('yearly').innerHTML = yearly.toLocaleString();
        e.preventDefault();
    });
    //loan of tabarro
    $('button.loan').on('click', function (e) {
        let depositLoan = $('input.depositLoan').val();
        let month = $('input#formGroupMonth').val();
        let installmentByMonth;
        depositLoan = depositLoan.replace(/,/g, '');
        if (month == 1) {
            installmentByMonth = '3'
        }
        if (month == 2) {
            installmentByMonth = '4'
        };
        if (month == 3) {
            installmentByMonth = '5'
        };
        if (month == 4) {
            installmentByMonth = '6'
        };
        if (month == 5) {
            installmentByMonth = '7'
        };
        if (month == 6) {
            installmentByMonth = '8'
        };
        if (month == 7) {
            installmentByMonth = '9'
        };
        if (month == 8) {
            installmentByMonth = '10'
        };
        if (month == 9) {
            installmentByMonth = '11'
        };
        if (month == 10) {
            installmentByMonth = '12'
        };
        if (month == 11) {
            installmentByMonth = '13'
        };
        if (month == 12) {
            installmentByMonth = '14'
        };
        if (month == 13) {
            installmentByMonth = '15'
        };
        if (month == 14) {
            installmentByMonth = '16'
        }
        if (month == 15) {
            installmentByMonth = '17'
        }
        if (month == 16) {
            installmentByMonth = '18'
        }
        if (month == 17) {
            installmentByMonth = '19'
        }
        if (month == 18) {
            installmentByMonth = '20'
        }
        if (month == 19) {
            installmentByMonth = '21'
        }
        if (month == 20) {
            installmentByMonth = '22'
        }
        if (month == 21) {
            installmentByMonth = '23'
        }
        if (month == 22) {
            installmentByMonth = '24'
        }
        if (month == 23) {
            installmentByMonth = '25'
        }
        if (month == 24) {
            installmentByMonth = '26'
        }
        if (month == 25) {
            installmentByMonth = '27'
        }
        if (month == 26) {
            installmentByMonth = '28'
        }
        if (month == 27) {
            installmentByMonth = '29'
        }
        if (month == 28) {
            installmentByMonth = '30'
        }
        if (month == 29) {
            installmentByMonth = '31'
        }
        if (month == 30) {
            installmentByMonth = '32'
        }
        if (month == 31) {
            installmentByMonth = '33'
        }
        if (month == 32) {
            installmentByMonth = '34'
        }
        if (month == 33) {
            installmentByMonth = '35'
        }
        if (month >= 34) {
            installmentByMonth = '36'
        }
        if (month >= 16) {
            let moneyRest = Math.round((depositLoan * 400 * 30) / 36500);
            let getLoan = Math.round((depositLoan * 4) + moneyRest);
            let installmentPaid = Math.ceil(getLoan / installmentByMonth);
           //insert result
            document.getElementById('getLoan').innerHTML = getLoan.toLocaleString();
           // document.getElementById('moneyRest').innerHTML = moneyRest.toLocaleString();
            document.getElementById('installmentByMonth').innerHTML = installmentByMonth;
            document.getElementById('installmentPaid').innerHTML = installmentPaid.toLocaleString();
        } else {
            monthByFour = month / 4;
            let moneyRest = Math.round((depositLoan * 400 * 30) / 36500);
            let getLoan = Math.round((depositLoan * monthByFour) + moneyRest);
            let installmentPaid = Math.ceil(getLoan / installmentByMonth);
            //insert result
            document.getElementById('getLoan').innerHTML = getLoan.toLocaleString();
           // document.getElementById('moneyRest').innerHTML = moneyRest.toLocaleString();
            document.getElementById('installmentByMonth').innerHTML = installmentByMonth;
            document.getElementById('installmentPaid').innerHTML = installmentPaid.toLocaleString();
        }
        e.preventDefault();
    });
})();