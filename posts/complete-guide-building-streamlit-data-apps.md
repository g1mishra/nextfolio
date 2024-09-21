---
title: "A Complete Guide to Building Streamlit Data Web Apps with Code Examples"
date: "2024-09-20"
excerpt: "Learn how to build interactive data dashboards using Streamlit with step-by-step code examples."
tags: [Streamlit, Data Apps, Python]
category: "Data Science"
---

# A Complete Guide to Building Streamlit Data Web Apps with Code Examples

Learn how to build interactive data dashboards using Streamlit. This guide provides a complete step-by-step approach, from creating a basic UI to deploying the app.

## Introduction to Streamlit

Streamlit is an open-source framework for building quick data apps with Python.

### Why Streamlit?

- Easy for building data-driven apps.
- Simple integration with Python libraries like Pandas and Matplotlib.

### Installation

To install Streamlit, run the following command:

```bash
pip install streamlit
```

### Your First Streamlit App

Here's how to create a simple "Hello, World!" app:

```python
import streamlit as st

st.title("Hello, Streamlit!")
st.write("This is your first Streamlit app.")
```

Run the app with:

```bash
streamlit run hello_world.py
```

## Building the Basic UI

Create a basic layout using Streamlit's built-in functions like `st.title()`, `st.header()`, and `st.file_uploader()`.

```python
import streamlit as st

st.title("Interactive Data Dashboard")
st.header("1. Load your Dataset")
uploaded_file = st.file_uploader("Choose a CSV file", type="csv")

if uploaded_file:
    st.write("File successfully uploaded.")
```

## Loading and Displaying Data

Once a file is uploaded, use `pandas` to load and display the data.

```python
import pandas as pd

if uploaded_file:
    df = pd.read_csv(uploaded_file)
    st.subheader("2. Data Preview")
    st.dataframe(df.head())
```

### Adding Filters

Allow users to filter data by a specific column.

```python
if uploaded_file:
    column_to_filter = st.selectbox("Select column to filter", df.columns)
    selected_value = st.selectbox(f"Select {column_to_filter} value", df[column_to_filter].unique())

    filtered_data = df[df[column_to_filter] == selected_value]
    st.write(f"Filtered data for {column_to_filter} = {selected_value}")
    st.dataframe(filtered_data)
```

## Data Visualization

### Matplotlib

Use Matplotlib to display static charts.

```python
import matplotlib.pyplot as plt

if uploaded_file:
    fig, ax = plt.subplots()
    filtered_data[column_to_filter].value_counts().plot(kind='bar', ax=ax)
    st.pyplot(fig)
```

### Plotly

For interactive visualizations, use Plotly.

```python
import plotly.express as px

if uploaded_file:
    fig = px.line(filtered_data, x="date_column", y="value_column", title="Trend over Time")
    st.plotly_chart(fig)
```

## Advanced Interactivity & State Management

Enhance user experience with checkboxes and buttons.

```python
if st.checkbox("Show raw data"):
    st.subheader("Raw Data")
    st.dataframe(df)
```

Use session state to store data across interactions.

```python
if 'filtered_data' not in st.session_state:
    st.session_state['filtered_data'] = df

if st.button('Update Data'):
    st.session_state['filtered_data'] = filtered_data
```

## Deploying the Data Dashboard

Once the app is ready, deploy it on Streamlit Cloud.

1. Push the code to GitHub.
2. Go to [Streamlit Cloud](https://share.streamlit.io/).
3. Deploy with a single click.

## Mini Project: Interactive Data Dashboard

Here's the full code to build an interactive data dashboard:

```python
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import plotly.express as px

st.title("Interactive Data Dashboard")

uploaded_file = st.file_uploader("Upload a CSV", type="csv")
if uploaded_file:
    df = pd.read_csv(uploaded_file)
    st.subheader("Data Preview")
    st.dataframe(df.head())

    column_to_filter = st.selectbox("Filter by column", df.columns)
    selected_value = st.selectbox(f"Select {column_to_filter} value", df[column_to_filter].unique())
    filtered_data = df[df[column_to_filter] == selected_value]

    st.subheader(f"Filtered Data for {column_to_filter} = {selected_value}")
    st.dataframe(filtered_data)

    fig, ax = plt.subplots()
    filtered_data[column_to_filter].value_counts().plot(kind='bar', ax=ax)
    st.pyplot(fig)

    fig = px.line(filtered_data, x="date_column", y="value_column", title="Trend over Time")
    st.plotly_chart(fig)

    if st.checkbox("Show raw data"):
        st.subheader("Raw Data")
        st.dataframe(df)
```

## Conclusion

In this guide, you've learned how to build a complete data dashboard using Streamlit. You can enhance it further with database integration, authentication, and more advanced filtering options.