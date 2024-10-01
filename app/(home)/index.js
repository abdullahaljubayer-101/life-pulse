import React, { useState } from "react";
import { View } from "react-native";
import { ProgressBar, Text } from "react-native-paper";

export default function Index() {
  const [chartPercentage, setChartPercentage] = useState({
    todo: {
      completed: 40,
      upcoming: 15,
      incomplete: 45,
    },
    expense: {
      completed: 70,
      upcoming: 25,
      incomplete: 5,
    },
    project: {
      completed: 20,
      upcoming: 10,
      incomplete: 70,
    },
  });

  return (
    <View className="flex-1 p-4 space-y-12">
      {/* >to-do */}
      <View className="space-y-3">
        <Text className="underline" variant="headlineMedium">
          To-Do:
        </Text>
        <View className="space-y-2">
          <View className="flex-row items-center justify-between">
            <Text variant="labelLarge">Completed:</Text>
            <View className="flex-row items-center gap-2">
              <ProgressBar
                className="w-64"
                progress={chartPercentage.todo.completed / 100}
                color="rgb(74 222 128)"
              />
              <Text variant="labelLarge">
                {chartPercentage.todo.completed > 10
                  ? `${chartPercentage.todo.completed}%`
                  : `0${chartPercentage.todo.completed}%`}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text variant="labelLarge">Upcoming:</Text>
            <View className="flex-row items-center gap-2">
              <ProgressBar
                className="w-64"
                progress={chartPercentage.todo.upcoming / 100}
                color="yellow"
              />
              <Text variant="labelLarge">
                {chartPercentage.todo.upcoming > 10
                  ? `${chartPercentage.todo.upcoming}%`
                  : `0${chartPercentage.todo.upcoming}%`}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text variant="labelLarge">Incomplete:</Text>
            <View className="flex-row items-center gap-2">
              <ProgressBar
                className="w-64"
                progress={chartPercentage.todo.incomplete / 100}
                color="red"
              />
              <Text variant="labelLarge">
                {chartPercentage.todo.incomplete > 10
                  ? `${chartPercentage.todo.incomplete}%`
                  : `0${chartPercentage.todo.incomplete}%`}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* >expense */}
      <View className="space-y-3">
        <Text className="underline" variant="headlineMedium">
          Expense:
        </Text>
        <View className="space-y-2">
          <View className="flex-row items-center justify-between">
            <Text variant="labelLarge">Completed:</Text>
            <View className="flex-row items-center gap-2">
              <ProgressBar
                className="w-64"
                progress={chartPercentage.expense.completed / 100}
                color="rgb(74 222 128)"
              />
              <Text variant="labelLarge">
                {chartPercentage.expense.completed > 10
                  ? `${chartPercentage.expense.completed}%`
                  : `0${chartPercentage.expense.completed}%`}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text variant="labelLarge">Upcoming:</Text>
            <View className="flex-row items-center gap-2">
              <ProgressBar
                className="w-64"
                progress={chartPercentage.expense.upcoming / 100}
                color="yellow"
              />
              <Text variant="labelLarge">
                {chartPercentage.expense.upcoming > 10
                  ? `${chartPercentage.expense.upcoming}%`
                  : `0${chartPercentage.expense.upcoming}%`}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text variant="labelLarge">Incomplete:</Text>
            <View className="flex-row items-center gap-2">
              <ProgressBar
                className="w-64"
                progress={chartPercentage.expense.incomplete / 100}
                color="red"
              />
              <Text variant="labelLarge">
                {chartPercentage.expense.incomplete > 10
                  ? `${chartPercentage.expense.incomplete}%`
                  : `0${chartPercentage.expense.incomplete}%`}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* >project */}
      <View className="space-y-3">
        <Text className="underline" variant="headlineMedium">
          Project:
        </Text>
        <View className="space-y-2">
          <View className="flex-row items-center justify-between">
            <Text variant="labelLarge">Completed:</Text>
            <View className="flex-row items-center gap-2">
              <ProgressBar
                className="w-64"
                progress={chartPercentage.project.completed / 100}
                color="rgb(74 222 128)"
              />
              <Text variant="labelLarge">
                {chartPercentage.project.completed > 10
                  ? `${chartPercentage.project.completed}%`
                  : `0${chartPercentage.project.completed}%`}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text variant="labelLarge">Upcoming:</Text>
            <View className="flex-row items-center gap-2">
              <ProgressBar
                className="w-64"
                progress={chartPercentage.project.upcoming / 100}
                color="yellow"
              />
              <Text variant="labelLarge">
                {chartPercentage.project.upcoming > 10
                  ? `${chartPercentage.project.upcoming}%`
                  : `0${chartPercentage.project.upcoming}%`}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text variant="labelLarge">Incomplete:</Text>
            <View className="flex-row items-center gap-2">
              <ProgressBar
                className="w-64"
                progress={chartPercentage.project.incomplete / 100}
                color="red"
              />
              <Text variant="labelLarge">
                {chartPercentage.project.incomplete > 10
                  ? `${chartPercentage.project.incomplete}%`
                  : `0${chartPercentage.project.incomplete}%`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
