# Generated by Django 4.2.4 on 2023-08-13 15:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("library", "0007_alter_book_average_rating"),
    ]

    operations = [
        migrations.AddField(
            model_name="transaction",
            name="book_name",
            field=models.CharField(default="", max_length=200),
        ),
    ]
