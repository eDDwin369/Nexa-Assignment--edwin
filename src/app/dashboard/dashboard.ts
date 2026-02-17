import { Component } from '@angular/core';
import { StatsCards } from './stats-cards/stats-cards';
import { ChartSection } from './chart-section/chart-section';
import { WeeklyReport } from './weekly-report/weekly-report';
import { Calendar } from './calendar/calendar';
import { QuickActions } from './quick-actions/quick-actions';

@Component({
    selector: 'app-dashboard',
    imports: [StatsCards, ChartSection, WeeklyReport, Calendar, QuickActions],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css'
})
export class Dashboard { }
