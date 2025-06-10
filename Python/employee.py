attendance_log = [True, False, True, True, False]
days_present = 0
total_days = 0
for day in attendance_log:
    total_days += 1
    if day == True:
        days_present += 1
attendance_percentage = (days_present / total_days) * 100
print("Days Present:", days_present)
print("Attendance Percentage:", str(int(attendance_percentage)) + "%")