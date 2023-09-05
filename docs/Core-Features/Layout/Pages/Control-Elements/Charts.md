---
sidebar_position: 23
---
# Charts

Chart control for displaying data. The data source must be set on the parent. The values to be displayed must be of type Int. Depending on the selected chart type, individual setting options are available. This control element is created based on the [google charts feature](https://developers.google.com/chart).

The data source given to this must be created and aggregated before hand, hence using the other reporting functionality is recommended.

| **Property** | **Description** |
| --- | --- |
| Chart Type | Display as selected chart type (AnnotationChart, AreaChart, BarChart, Bar, BubbleChart, ColumnChart, ComboChart, CandlestickChart, DonutChart, GeoChart, Histogram, LineChart, Line, Map, PieChart, ScatterChart, SteppedAreaChart, WordTree, OrgChart, Gauge, radar, polarArea, TreeMap, Gantt, Calendar, Timeline, Interval, radialBar, heatmap, Sunburst) |
| **Data Mapping** | Mapping the elements |
| **Axes – value** | Axis value to be plotted |
| **Row** | Row value to display |
| **Chart Settings** | Depending on the selected chart type |

| Exclusive event | Description |
| --- | --- |
| Selection Changed | When selecting an option |
