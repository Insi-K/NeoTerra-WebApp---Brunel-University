
//import '../.././../Styles/App.css';
//Temporarily commented this import as it causes conflict with another css file

function SplitDate(date) {

    if (date !== null) {

        if (date[date.length - 5] == "/") {

            var dateSplit = date.split("/");

            var day = dateSplit[0];
            var month = dateSplit[1];
            var year = dateSplit[2];

            var totalDate = year + month + day;

            return totalDate;

        } else {

            var dateSplit = date.split(" ");

            var day = dateSplit[0];

            switch (dateSplit[1]) {
                case 'Jan':
                    var month = '01';
                    break;

                case 'Feb':
                    var month = '02';
                    break;

                case 'Mar':
                    var month = '03';
                    break;

                case 'Apr':
                    var month = '04';
                    break;

                case 'May':
                    var month = '05';
                    break;

                case 'Jun':
                    var month = '06';
                    break;

                case 'Jul':
                    var month = '07';
                    break;

                case 'Aug':
                    var month = '08';
                    break;

                case 'Sep':
                    var month = '09';
                    break;

                case 'Oct':
                    var month = '10';
                    break;

                case 'Nov':
                    var month = '11';
                    break;

                case 'Dec':
                    var month = '12';
                    break;
            
                default:
                    break;
            } //End Switch

            var year = dateSplit[2];

            var totalDate = year + month + day;

            return totalDate;


        } //End If


    } else {

        return date;

    }

}

export default SplitDate