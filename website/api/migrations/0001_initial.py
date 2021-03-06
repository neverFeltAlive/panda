# Generated by Django 4.0.4 on 2022-05-26 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('message', models.TextField(max_length=300)),
                ('phone_number', models.CharField(max_length=15)),
                ('email', models.EmailField(blank=True, max_length=50)),
                ('date', models.DateField(auto_now_add=True)),
                ('type', models.CharField(choices=[('comment', 'Комментарий'), ('application', 'Заявка'), ('phone_call', 'Заказ звонка')], max_length=20)),
            ],
        ),
    ]
