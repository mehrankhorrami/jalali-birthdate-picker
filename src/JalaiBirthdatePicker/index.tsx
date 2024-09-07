import React, {useEffect, useState} from 'react';
import jMoment from 'moment-jalaali';

jMoment.loadPersian({dialect: 'persian-modern', usePersianDigits: false});

interface BirthdatePickerProps {
    value?: string;
    onChange?: (date: string) => void;
}

const JalaliBirthdatePicker: React.FC<BirthdatePickerProps> = ({value, onChange}) => {
    const initialDate = value ? jMoment(value, 'YYYY-MM-DD') : jMoment();
    const [year, setYear] = useState<number>(initialDate.jYear());
    const [month, setMonth] = useState<number>(initialDate.jMonth() + 1);
    const [day, setDay] = useState<number>(initialDate.jDate());

    const currentYear = jMoment().jYear();
    const minYear = currentYear - 100;

    useEffect(() => {
        if (onChange) {
            const newDate = jMoment(`${year}/${month}/${day}`, 'jYYYY/jM/jD').format('YYYY-MM-DD');
            onChange(newDate);
        }
    }, [year, month, day, onChange]);

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(parseInt(e.target.value));
    };

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(parseInt(e.target.value));
    };

    const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDay(parseInt(e.target.value));
    };

    const renderYearOptions = () => {
        const options = [];
        for (let y = currentYear; y >= minYear; y--) {
            options.push(<option key={y} value={y}>{y}</option>);
        }
        return options;
    };

    const renderMonthOptions = () => {
        const months = [
            "فروردین", "اردیبهشت", "خرداد", "تیر",
            "مرداد", "شهریور", "مهر", "آبان",
            "آذر", "دی", "بهمن", "اسفند"
        ];
        return months.map((month, index) => (
            <option key={index} value={index + 1}>{month}</option>
        ));
    };

    const renderDayOptions = () => {
        const daysInMonth = jMoment(`${year}/${month}`, 'jYYYY/jM').daysInMonth();
        const options: any[] = [];
        for (let d = 1; d <= daysInMonth; d++) {
            options.push(<option key={d} value={d}>{d}</option>);
        }
        return options;
    };

    return (
        <div className="Jalali-birthdate-picker">
            <select className="year-select-field" value={year} onChange={handleYearChange}>
                {renderYearOptions()}
            </select>
            <select className="month-select-field" value={month} onChange={handleMonthChange}>
                {renderMonthOptions()}
            </select>
            <select className="day-select-field" value={day} onChange={handleDayChange}>
                {renderDayOptions()}
            </select>
        </div>
    );
};

export default JalaliBirthdatePicker;
