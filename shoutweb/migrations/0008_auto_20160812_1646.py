# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-12 16:46
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoutweb', '0007_auto_20160811_0105'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='shouter',
            options={'verbose_name': 'Shouter'},
        ),
        migrations.AlterModelTable(
            name='shouter',
            table='shouter',
        ),
    ]
